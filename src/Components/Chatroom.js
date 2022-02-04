import React, { useRef, useState } from 'react';
// import './chatApp.css';
import firebase from 'firebase/compat/app'
// import { useAuth } from '../contexts/AuthContext'
import { Container, Form, Button } from 'react-bootstrap'
import 'firebase/compat/firestore'
import 'firebase/analytics';
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import * as Icon from 'react-bootstrap-icons'





// const auth = firebase.auth();
const firestore = firebase.firestore();
// const analytics = firebase.analytics();

function Chat() {
  const [user] = useAuthState(auth);
  // const [error, setError] = useState('')

  const navigate = useNavigate()

  // async function handleLogout () {
  //   setError('')

  //   try {
  //     await logout()
  //     navigate('/')
  //   } catch {
  //     setError('Failed to log out')
  //   }
  // }

  return (
    <div style={{textAlign: 'center'}}className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>

    </div>
  );
}

function SignIn() {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  return (
    <>
      <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
      <p>Do not violate the community guidelines or you will be banned for life!</p>
    </>
  )

}

function SignOut() {
  const navigate =useNavigate()
  return auth.currentUser && (
    <Button variant='outline-secondary' className="sign-out text-center" onClick={() => auth.signOut() && navigate('/')}>Sign Out</Button>)
}


function ChatRoom() {
  const dummy = useRef();
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

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

  return ( <>
    <main>

      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}

      <span ref={dummy}></span>

    </main>

    <Form className='text-center' onSubmit={sendMessage}>

      <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="say something nice" />

      <Button className= 'mx-2' type="submit" disabled={!formValue} > <Icon.Send /></Button>

    </Form>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;

  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (<>
    <div style={{textAlign: 'center'}} className={`message ${messageClass}`}>
      <img src={photoURL || 'https://api.adorable.io/avatars/23/abott@adorable.png'} alt=''/>
      <p>{text}</p>
    </div>
  </>)
}


export default Chat;