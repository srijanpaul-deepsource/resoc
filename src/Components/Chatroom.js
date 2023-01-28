import React, { useRef, useState } from 'react';
import './chatApp.css';
import firebase from 'firebase/compat/app'
import { Form, Button } from 'react-bootstrap'
import 'firebase/compat/firestore'
import 'firebase/analytics';
import { useNavigate } from 'react-router-dom'
import { useCollectionData } from 'react-firebase-hooks/firestore';
import * as Icon from 'react-bootstrap-icons'
import Header from './Navbar'
import Footer from './Footer';

const auth = firebase.auth();
const firestore = firebase.firestore();

function Chat() {
  return (<>
    <Header />
    <div className="App">

      <section className="">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="card" id="list1" style={{ borderRadius: .75 + "rem", backgroundColor: "#f8f9fa" }}>
                <div className="card-body py-4 px-4 px-md-5">

                  <p className="h1 text-center mt-3 mb-4 pb-3 text-primary">
                    <i className="fas fa-check-square me-1"></i>
                    Live Chat 🔥💬
                  </p>
                  <SignOut />
                  <ChatRoom />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <Footer/>
  </>);
}

function SignOut() {
  const navigate = useNavigate()
  return auth.currentUser && (
    <Button variant='outline-secondary' className="sign-out text-center" onClick={() => auth.signOut() && navigate('/')}>Sign Out</Button>)
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');


  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main className='main' >

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <Form className='form' onSubmit={sendMessage}>

      <input className='inp' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Start typing " />
      <Button className='ButtonSend mx-2' type="submit" disabled={!formValue} > <Icon.Send /></Button>

    </Form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div style={{ textAlign: 'center' }} className={`message ${messageClass}`}>
      <img className='profphoto' src={photoURL || 'https://adorable-avatars.broken.services/120/myseed'} alt='' />
      <p className='para'>{text}</p>
    </div>
  </>)
}

export default Chat;