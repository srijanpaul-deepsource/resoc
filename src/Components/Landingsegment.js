import React from 'react'
import pc from '../assets/img/undraw_programming_2svr.svg'
export default function Landingsegment () {
  return (
    <>
      <section className='text-light p-5 text-sm bg-dark'>
        <div className='container'>
          <div className='d-sm-flex align-items-center justify-content-between'>
            <div className='img-home'>
              <h1 className='mx-1' >RE<span className='text-secondary'>Soc</span> </h1>
              <h5 className='mx-1' >Get your College Resources  </h5>
              <p className='lead my-4 mx-2'>Hi. Welcome to RESOC. This website has been created by students of Silicon Institute of Technology, Bhubaneswar for the student community to help with notes and academics resources for free! Feel free to sign in, browse through, download, share and have fun!</p>
            </div>
            <img className='img-fluid w-50 d-none d-sm-block' src={pc} alt='' />
          </div>
        </div>
      </section>

    </>
  )
}
