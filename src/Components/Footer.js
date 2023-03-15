import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer () {
  return (
    <>
      <footer className='p-2 text-center sticky-bottom position-relative' id='learnaboutus'>
        <div className=' container '>
          <p> Made with ❤️ by <Link to='/aboutus' className='text-var'>TeamSoc</Link> 
          </p>
        </div>
      </footer>

    </>
  )
}
