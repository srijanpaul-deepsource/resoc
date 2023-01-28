import React from 'react'

export default function Footer () {
  return (
    <>
      <footer className='p-5 bg-dark text-white text-center sticky-bottom position-relative' id='learnaboutus'>
        <div className=' container '>
          <p>This website is crafted by CodeBotx. &copy; Copyrights <a href='http://anubhavp.me' style={{ textDecoration: 'none', color: 'white' }}> Anubhab Patnaik</a> </p>
        </div>

        <a href='# ' className='position-absolute bottom-0 end-0 p-5 '>
          <i className='bi bi-arrow-up-circle h1 ' />
        </a>

      </footer>

    </>
  )
}
