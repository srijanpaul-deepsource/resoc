import React from 'react'

export default function Footer () {
  return (
    <>
      <footer className='p-5 bg-dark text-white text-center position-relative' id='learnaboutus'>
        <div className=' container '>
          <p>This website is created by CodeBotx.</p>
        </div>
        <p className='lead '>Copyright &copy; 2021 Anubhab Patnaik</p>

        <a href='# ' className='position-absolute bottom-0 end-0 p-5 '>
          <i className='bi bi-arrow-up-circle h1 ' />
        </a>

      </footer>

    </>
  )
}
