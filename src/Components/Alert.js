import { useState, useEffect } from 'react'
import {Alert} from 'react-bootstrap'
var dark = false;
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  dark = true;
}

const Message = ({ variant, children }) => {
  const [show, setShow] = useState(true)

  // On componentDidMount set the timer
  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setShow(false)
    }, 2000)

    return () => {
      clearTimeout(timeId)
    }
  }, []);

  // If show is false the component will return null and stop here
  if (!show) {
    return null;
  }

  // If show is true this will be returned
  if(dark){
  return (
    <Alert variant='dark' className='text-center'>You're in! Welcome to the club.🔥</Alert>
  )
  }
  else{
    return (
      <Alert variant='light' className='text-center'>You're in! Welcome to the club.🔥</Alert>
    )
  }
}

Message.defaultPros = {
  variant: 'info',
}

export default Message;