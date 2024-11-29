'use client'
import React, { useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { Button, Form, InputGroup } from 'react-bootstrap'
//
import { CLASSES } from '../../../assets/styles/styles'
import { useRouter } from 'next/navigation'

function SearchJob() {
  const router = useRouter()
  const [keywords, setKeywords] = useState('')

  return (
    <Container
      fluid
      className={CLASSES.content_between + 'py-2 overflow-hidden'}
    >
      <Container>
        <Row className='my-5 justify-content-center'>
          <Col md={7} className='text-center'>
            <h1 style={{ fontWeight: 600, fontSize: 35 }}>
              Find Your Dream Job
            </h1>
            <p className='my-3' style={{ color: '#879393' }}>
              Discover thousands of job opportunities with all the information
              you need
            </p>
            <Form>
              <InputGroup style={{ height: 50 }} className='mb-3'>
                <Form.Control
                  placeholder="Type keywords"
                  aria-label="Type keywords"
                  aria-describedby='basic-addon2'
                  onChange={(e) => setKeywords(e.target.value)}
                />
                <Button
                  onClick={(e) => {
                    router.push(`/jobs?keyword=${keywords}`)
                  }}
                  variant='outline-secondary'
                  id='button-addon2'
                >
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
