"use client"
import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import {
  Button,
  Form,
  FormControl,
  FormGroup,
  InputGroup,
} from 'react-bootstrap'
//
import { CLASSES } from '../../../assets/styles/styles'

function SearchJob() {
  const [email, setEmail] = useState('')
  const [isLoading, setLoading] = useState(false)

  const backgroundImageStyle = {
    // backgroundImage: `url(${Tree})`,
    // backgroundSize: 'cover',
    // backgroundRepeat: 'no-repeat',
    // backgroundPosition: 'center',
    backgroundColor: '#171717',
    width: '100%',
    // height: '400px', // Set the height as needed
  }

  const handleSubscription = async () => {
    try {
      setLoading(true)
      // const response = await HomePageService.subscription(email)
      // // const response = {success: true}
      // if (response.success) {
      //   Swal.fire({
      //     title: response.message,
      //     icon: 'success',
      //     showConfirmButton: false,
      //     timer: 2000,
      //   }).then((result) => {
      //     /* Read more about handling dismissals below */
      //     if (result.dismiss === Swal.DismissReason.timer) {
      //       console.log('I was closed by the timer')
      //     }
      //   })
      // }
    } catch (error) {
      console.log(error)
    } finally {
      setEmail('')
      setLoading(false)
    }
  }

  return (
    <Container
      fluid
      className={CLASSES.content_between + 'py-2 overflow-hidden'}
      // style={{ backgroundColor: '#f5fff9', ...backgroundImageStyle }}
    >
      <Container>
        <Row className='my-5 justify-content-center'>
          <Col md={7} className='text-center'>
            <h1 style={{ fontWeight: 600, fontSize: 35 }}>Find Your Dream Job</h1>
            <p className='my-3' style={{ color: '#879393' }}>
              Discover thousands of job opportunities with all the information
              you need
            </p>
            <Form
              onSubmit={(e) => {
                e.preventDefault()
                handleSubscription()
              }}
            >
              <InputGroup style={{height: 50}} className='mb-3'>
                <Form.Control
                  placeholder="Recipient's username"
                  aria-label="Recipient's username"
                  aria-describedby='basic-addon2'
                />
                <Button variant='outline-secondary' id='button-addon2'>
                  Search
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default SearchJob
