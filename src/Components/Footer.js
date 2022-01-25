import React from 'react'
import { Card } from 'react-bootstrap'

export default function Footer () {
  return (
    <>
      <Card text='white' className='text-center' bg='dark'>
        <Card.Body>
          <Card.Title />
          <Card.Text>
            <p>  This website is created by CodeBotx.</p>
            <p className='lead'> Copyright &copy; 2021 Anubhab Patnaik</p>
          </Card.Text>
        </Card.Body>
        <div>
          <a href='# ' className='position-absolute bottom-0 end-0 p-2 ' position='absolute'>
            <i className='bi bi-arrow-up-circle h1 ' />
          </a>
        </div>

      </Card>

    </>
  )
}
