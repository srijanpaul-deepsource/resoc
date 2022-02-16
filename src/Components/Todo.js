import React from 'react'
import './Todoapp.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './Navbar'
import { useState, useEffect } from 'react'
import 'firebase/compat/firestore'
import firebase from 'firebase/compat/app';
import { useAuth } from '../contexts/AuthContext'
import {  TrashFill } from 'react-bootstrap-icons';

export default function Todo() {
	const firestore = firebase.firestore();
	const { currentUser } = useAuth()
	const [todos, setTodos] = useState([])
	const [input, setInput] = useState('')
	useEffect(() => {
		firestore.collection('Todos').doc(currentUser.uid).collection('Todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
			setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
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
		<Header />
		<section className="vh-100">
			<div className="container py-5 h-100">
				<div className="row d-flex justify-content-center align-items-center h-100">
					<div className="col">
						<div className="card" id="list1" style={{ borderRadius: .75 + "rem", backgroundColor: "#f8f9fa" }}>
							<div className="card-body py-4 px-4 px-md-5">

								<p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
									<i className="fas fa-check-square me-1"></i>
									My Todos
								</p>
								<p style={{ textAlign: 'center', marginTop: -1 + 'rem' }}>{todos.length} tasks pending!</p>
								<form>
									<div className="pb-2">
										<div className="card">
											<div className="card-body">
												<div className="d-flex flex-row align-items-center" style={{ borderRadius: .75 + "rem" }}>
													<input type="text" className="form-control form-control-lg" id="exampleFormControlInput1" placeholder="Add new task..." value={input} onChange={e => setInput(e.target.value)} />

													<div>
														<button disabled={!input} type="submit" className="btn btn-primary" onClick={addTodo}>Add</button>
													</div>
												</div>
											</div>
										</div>
									</div>
								</form>
								<hr className="my-4" />

								{todos.map((todo => (<>
									<ul className="list-group list-group-horizontal rounded-0">
										<li className="list-group-item d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
											<div className="form-check">
												<input
													className="form-check-input me-0"
													type="checkbox"
													value=""
													id="flexCheckChecked2"
													aria-label="..."
												/>
											</div>
										</li>
										<li className="list-group-item px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
											<p className="lead fw-normal mb-0">{todo.todo}</p>
										</li>
										<button type="button" className="btn" style={{ background: "none", outline: "none", }} onClick={e => firestore.collection('Todos').doc(currentUser.uid).collection('Todos').doc(todo.todo.id).delete() }><TrashFill /></button>
									</ul>
								</>)))}

							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

	</>)

}

