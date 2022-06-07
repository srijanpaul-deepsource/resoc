import React from 'react'
import notes from '../assets/img/notes.svg'
import list from '../assets/img/list.svg'
import notebook from '../assets/img/notebook.svg'
export default function Landingsegment () {
  return (
    <>
      <section className='text-light p-5 text-sm-center bg-dark'>
        <div className='container'>
          <div class='d-sm-flex align-items-center justify-content-between'>
            <div class='img-home'>
              <h1>Grab your <span class='text-secondary'>NOTES</span> here </h1>
              <p class='lead my-4 mx-2'>Hi! Welcome to Notes.SIT. This website has been created by students of Silicon Institute of Technology, Bhubaneswar for the student community to help with notes for free!</p>
            </div>
            <img className='img-fluid w-50 d-none d-sm-block' src={notes} alt='' />
          </div>
        </div>
      </section>

    </>
  )
}
