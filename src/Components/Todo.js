import React from 'react'
import { useState, useEffect } from 'react'
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';
import { useAuth } from '../contexts/AuthContext'
import {
    TrashFill,
    CheckSquare,
    Check2Square
} from 'react-bootstrap-icons';
import office from '../assets/img/intheoffice.svg'
import '../assets/css/Todoapp.css'

export default function Todo() {
    const firestore = firebase.firestore();
    const { currentUser } = useAuth()
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    useEffect(() => {
        firestore.collection('Todos').doc(currentUser.uid).collection('Todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo, done: doc.data().done })))
        })

    }, [])

    const addTodo = (e) => {
        e.preventDefault()
        firestore.collection('Todos').doc(currentUser.uid).collection('Todos').add({
            todo: input, timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setTodos([...todos, input])
        setInput('')
    }
    return (<>
        <div className=''>
            <section className=" pt-5 px-sm-3 px-5 cdin">
                <div className="container ">
                    <div className="d-sm-flex align-items-center justify-content-between mainc">
                        <div className="img-home">
                            <h1 className="heading">Tasks ✔️</h1>
                            <p className="lead my-4">
                                Manage your tasks with ease.
                            </p>
                        </div>
                        <img className="img-fluid w-50 d-none d-sm-block" src={office} alt="in office" />
                    </div>
                </div>
            </section>
            <div className='p-5'>
                <div className="container">
                    { todos.length > 0 && 
                    <p>Pending: <b>{todos.length}</b></p>}
                    <div className=" d-flex justify-content-between">
                        <input type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Add new task..." value={input} onChange={e => setInput(e.target.value)} />
                        <button disabled={!input} type="submit" className="btn btn-text-var" onClick={addTodo}>+</button>
                    </div>
                    {todos.map((todo => (<>

                        <li style={{
                            listStyle: "none",
                        }}>
                            <div className='d-flex justify-content-between'>
                                <div className='d-flex justify-content-start' style={{ alignItems: "center" }}>
                                    <button type="button" className="btn" style={{ background: "none", outline: "none", }} onClick={e =>
                                        firestore.collection('Todos').doc(currentUser.uid).collection('Todos').doc(todo.id).update({
                                            done: !todo.done
                                        })
                                    }><Check2Square /></button>
                                    <div style={{ textDecoration: todo.done ? "line-through" : "none", }}>{todo.todo}</div>
                                </div>
                                <button type="button" className="btn" style={{ background: "none", outline: "none", }} onClick={e => firestore.collection('Todos').doc(currentUser.uid).collection('Todos').doc(todo.id).delete()}><TrashFill /></button>
                            </div>
                        </li>
                    </>)))}
                </div>
            </div>
        </div >

    </>)

}
