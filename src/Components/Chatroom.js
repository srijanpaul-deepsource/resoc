import React, { useRef, useState } from 'react';
import '../assets/css/chatApp.css';
import firebase from 'firebase/compat/app'
import { Form } from 'react-bootstrap'
import 'firebase/compat/firestore'
import 'firebase/analytics';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import community from '../assets/img/team.svg'
import { Send } from 'react-bootstrap-icons'

const auth = firebase.auth();
const firestore = firebase.firestore();

var dark = false;
function Chat() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) dark = true;
  const [limit, setLimit] = useState(25);
  const [isDark, setIsDark] = React.useState(dark);

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
    event.matches ? setIsDark(true) : setIsDark(false);
  });

  return (<>
    <section className="py-4 px-3 px-sm-1 cdin">
      <div className="container ">
        <div className="d-sm-flex align-items-center justify-content-between mainc">
          <div className="img-home">
            <h1 className="heading">SOC<span className="text-secondary">HOME</span></h1>
            <p className="lead my-4">
              Connect and engage with like-minded folk, and give us a holler!
            </p>
          </div>
          <img className="img-fluid w-50 d-none d-sm-block p-5" src={community} style={{
            marginBlockEnd: "20px",

          }} alt="in office" />
        </div>
      </div>
    </section>

    <div className='p-2 p-sm-5' style={{

    }}>
      <button className="btn"
        style={{
          color: '#ff5e5b',
        }}
        onClick={() => auth.signOut()}>SIGN OUT</button>
      <div className=" py-2 d-flex align-items-center justify-content-start mb-2">
        {isDark &&
          <button className="btn btn-dark" onClick={() => setLimit(limit + 25)}>Load More</button>
        }
        {!isDark &&
          <button className="btn btn-light" onClick={() => setLimit(limit + 25)}>Load More</button>
        }
      </div>
      <ChatRoom dark ={isDark} limit={limit}
      />
    </div>

  </>);
}

function ChatRoom(props) {
  // console.log(props.limit);
  
  const dummy = useRef();
  const messagesRef = firestore.collection('messages-prod');
  const query = messagesRef.orderBy('createdAt').limitToLast(props.limit);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
      id: uid + Date.now() + Math.random()
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (<>
    <main className='main p-2 p-sm-4' >
      {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
      <span ref={dummy}></span>

      <div className='d-flex justify-content-between'>
        <Form className='form mx-4 my-3' onSubmit={sendMessage}>
          <input className='form-control form-control-sm' value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Start typing " />
          <button type="btn submit" disabled={!formValue} className="btn mx-1" style={{ background: "none", outline: "none", color: props.dark ? "white" : "black", }}><Send /></button>
        </Form>
      </div>
    </main>
  </>)
}


function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  // console.log(text + props.message.id)
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (<>
    <div style={{
      textAlign: messageClass === 'sent' ? 'right' : 'left',
    }} className={`message ${messageClass} px-sm-2`}>
      <img className='profphoto' src={photoURL || 'https://adorable-avatars.broken.services/120/myseed'} alt='' />
      <p className='para' key="{props.key}"
      style={{
        fontSize: '0.8rem',
      }}>{text}</p>
    </div>
  </>)
}

export default Chat;