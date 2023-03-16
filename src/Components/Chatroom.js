import React, { useRef, useState } from 'react';
import '../assets/css/chatApp.css';
import firebase from 'firebase/compat/app'
import { Form} from 'react-bootstrap'
import 'firebase/compat/firestore'
import 'firebase/analytics';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import community from '../assets/img/standout.svg'
import {Send} from 'react-bootstrap-icons'

const auth = firebase.auth();
const firestore = firebase.firestore();

var dark = false;
function Chat() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) dark = true;
    
  return (<>
    <div className='container'>
      <section className="pt-5 px-sm-2 px-4 cdin">
        <div className="container ">
          <div className="d-sm-flex align-items-center justify-content-between mainc">
            <div className="img-home">
              <h1 className="heading">SOC<span className="text-secondary">HOME</span></h1>
              <p className="lead my-4">
                Connect with like-minded folk.
              </p>
            </div>
            <img className="img-fluid w-50 d-none d-sm-block" src={community} alt="in office" />
          </div>
        </div>
      </section>
      <div className='p-2 p-sm-5'>
      <ChatRoom />
      </div>
    </div>
  </>);
}

function ChatRoom() {
  const [isDark, setIsDark] = React.useState(dark);
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
      event.matches ? setIsDark(true) : setIsDark(false);
    });
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
    <div className='d-flex justify-content-center'>

    <Form className='form d-flex justify-content-between' onSubmit={sendMessage}>
      <input className='form-control form-control-sm' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Start typing " />      
      <button  type="btn submit" disabled={!formValue} className="btn mx-2" style={{ background: "none", outline: "none", color: isDark ? "white" : "black",}}><Send /></button>
    </Form>
    </div>
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