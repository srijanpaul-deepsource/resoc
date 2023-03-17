import React from 'react'
import { useState, useEffect } from 'react'
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';
import { useAuth } from '../contexts/AuthContext'
import { v4 as uuidv4 } from 'uuid';
import {
    Trash,
    Check2Square,
    PlusLg,
} from 'react-bootstrap-icons';
import { Form } from 'react-bootstrap'
import office from '../assets/img/intheoffice.svg'
const auth = firebase.auth();
export default function Todo() {
    var dark = false;
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        dark = true;
    }
    const firestore = firebase.firestore();
    const [todos, setTodos] = useState([])
    const [input, setInput] = useState('')
    const [isDark, setIsDark] = React.useState(dark);
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
        event.matches ? setIsDark(true) : setIsDark(false);
    });
    useEffect(() => {
        firestore.collection('Todos').doc(auth.currentUser.uid).collection('Todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo, done: doc.data().done, key: doc.data().id })))
        })
    }, [])

    const addTodo = async (e) => {
        e.preventDefault();
        const { uid } = auth.currentUser;
        await firestore
          .collection("Todos")
          .doc(uid)
          .collection("Todos")
          .add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            done: false,
            id: uuidv4(),
          });
        setTodos([
          ...todos,
          {
            todo: input,
            done: false,
            key: uuidv4(),
          },
        ]);
        setInput("");
      }
    return (<>
        <section className=" py-4 px-4 px-sm-1 cdin">
            <div className="container ">
                <div className="d-sm-flex align-items-center justify-content-between mainc">
                    <div className="img-home">
                        <h1 className="d-inline heading"
                            style={{
                                whiteSpace: "nowrap",
                            }}
                        >Tasks ✔️</h1>
                        <p className="lead my-4">
                            Manage your tasks with ease.
                        </p>
                    </div>
                    <img className="img-fluid w-50 d-none d-sm-block" src={office} alt="in office" />
                </div>
            </div>
        </section>
        <div className='px-2 px-sm-5' style={{
            minHeight: "25vh",
        }}>
            <div className="container">
                {todos.length > 0 && <p>Pending: <b>{todos.length}</b></p>}
                <Form className=" d-flex justify-content-between" onSubmit={addTodo}>
                    <input type="text" className="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Add new task..." value={input} onChange={e => setInput(e.target.value)} />
                    <button type="btn submit" disabled={!input} className="btn btn-text-var" style={{ background: "none", outline: "none", color: isDark ? "white" : "black", }}><PlusLg /></button>
                </Form>

                <ul className="list-group list-group-flush">
                {todos.map((todo, index) => {
//   console.log(todo.key);
  return (
    <li
      key={todo.key || index}
      style={{
        listStyle: "none",
      }}
    >
      <div className="d-flex justify-content-between">
        <div
          className="d-flex justify-content-start"
          style={{ alignItems: "center" }}
        >
          <button
            type="button"
            className="btn"
            style={{
              background: "none",
              outline: "none",
              color: isDark ? "white" : "black",
              paddingLeft: "0px",
            }}
            onClick={(e) =>
              firestore
                .collection("Todos")
                .doc(auth.currentUser.uid)
                .collection("Todos")
                .doc(todo.id)
                .update({
                  done: !todo.done,
                })
            }
          >
            <Check2Square />
          </button>
          <div
            style={{
              textDecoration: todo.done ? "line-through" : "none",
            }}
            key={todo.id}
          >
            {todo.todo}
          </div>
        </div>
        <button
          type="button"
          className="btn"
          style={{
            background: "none",
            outline: "none",
            color: isDark ? "white" : "black",
          }}
          onClick={(e) =>
            firestore
              .collection("Todos")
              .doc(auth.currentUser.uid)
              .collection("Todos")
              .doc(todo.id)
              .delete()
          }
        >
          <Trash />
        </button>
      </div>
    </li>
  );
})}

                </ul>
            </div>
        </div>
    </>)

}
