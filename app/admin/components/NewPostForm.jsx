'use client'
import React, { useState, useCallback, useEffect } from 'react'
import { Container, Form, Button, Alert, Modal } from 'react-bootstrap'
import { CLASSES } from '../../../assets/styles/styles'

const defaultFormData = {
  title: '',
  description: '',
  salary: '',
  location: '',
  company: '',
  jobType: '',
  category: '',
}
export default function NewPostForm({ job, setJob = () => {} }) {
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState(defaultFormData)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [loading, setLoading] = useState(true)
  const [categories, setCategories] = useState([])
  const [jobTypes] = useState(['All', 'Full-Time', 'Freelance', 'Part-Time'])

  const getData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_APP_API_ENDPOINT + '/api/categories',
      )
      const data = await res.json()
      if (data) {
        setCategories(data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData])

  useEffect(() => {
    console.log(job)
    if (job?.id) {
      setFormData(job)
      setShowModal(true)
    } else {
      formModalClose()
    }
  }, [job?.id])

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Validate form
  const validateForm = () => {
    const { title, description, location, category } = formData
    if (!title || !description || !location || !category) {
      setError('All fields are required.')
      return false
    }
    setError('')
    return true
  }

  const formModalClose = () => {
    setShowModal(false)
    setFormData(defaultFormData)
    if (job?.id) {
      setFormData(defaultFormData)
      // setJob({})
    }
  }

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_APP_API_ENDPOINT + '/api/jobs',
        {
          method: job?.id ? 'PUT' : 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData, id: job?.id || Date.now() }),
        },
      )
      if (response.ok) {
        formModalClose()
        setSuccess(true)
        setTimeout(() => {
          setSuccess(false)
        }, 2000)
      } else {
        setError('Failed to post the job. Try again.')
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <div>
      <div className={CLASSES.content_between + ' gap-3'}>
        <Button
          onClick={() => {
            setShowModal(true)
            setJob({})
          }}
        >
          Add New Post
        </Button>
        {success && (
          <Alert variant='success'>
            Job {job?.id ? 'Updated' : 'posted'} successfully!
          </Alert>
        )}
      </div>
      <Modal show={showModal} onHide={formModalClose}>
        <Modal.Body>
          <Modal.Header closeButton className='mb-3'>
            <Modal.Title>{job?.id ? 'Edit Job' : 'Post a Job'}</Modal.Title>
          </Modal.Header>
          {error && <Alert variant='danger'>{error}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formTitle' className='mb-3'>
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter job title'
                name='title'
                value={formData.title}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formDescription' className='mb-3'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter job description'
                name='description'
                value={formData.description}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formDescription' className='mb-3'>
              <Form.Label>Company</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter company name'
                name='company'
                value={formData.company}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formLocation' className='mb-3'>
              <Form.Label>Location</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter job location'
                name='location'
                value={formData.location}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Group controlId='formLocation' className='mb-3'>
              <Form.Label>Salary</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter salary range'
                name='salary'
                value={formData.salary}
                onChange={handleChange}
              />
            </Form.Group>

            <Form.Label>Job type</Form.Label>
            <Form.Select
              name='jobType'
              value={formData.jobType}
              onChange={handleChange}
              style={{ borderColor: 'black' }}
            >
              {jobTypes.map((jobType) => (
                <option key={jobType} value={jobType}>
                  {jobType}
                </option>
              ))}
            </Form.Select>

            <Form.Group controlId='formCategory' className='my-3'>
              <Form.Label>Category</Form.Label>
              <Form.Select
                name='category'
                value={formData.category}
                onChange={handleChange}
                style={{ borderColor: 'black' }}
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Button variant='primary' type='submit'>
              Post Job
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  )
}
