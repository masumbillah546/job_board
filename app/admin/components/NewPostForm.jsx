'use client'
import React, { useState, useCallback, useEffect } from 'react'
// import { useRouter } from "next/router";
import { Container, Form, Button, Alert, Modal } from 'react-bootstrap'

export default function NewPostForm() {
  // const router = useRouter();
  const [showModal, setShowModal] = useState(false)
 // const router = useRouter();
 const [formData, setFormData] = useState({
  title: '',
  description: '',
  salary: '',
  location: '',
  company: '',
  jobType: '',
  category: '',
})
const [error, setError] = useState('')
const [success, setSuccess] = useState(false)

const [loading, setLoading] = useState(true)
const [listType, setListType] = useState(1)
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
    setShowModal(false)
  }
}, [])

useEffect(() => {
  getData()
}, [getData, listType])

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

// Submit form
const handleSubmit = async (e) => {
  e.preventDefault()
  if (!validateForm()) return

  try {
    const response = await fetch(
      process.env.NEXT_PUBLIC_APP_API_ENDPOINT + '/api/jobs',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, id: Date.now() }),
      },
    )
    if (response.ok) {
      setSuccess(true)
      setFormData({ title: '', description: '', location: '', category: '' })
      setTimeout(() => {
        // router.push("/jobs");
      }, 2000) // Redirect to Job Listings page after 2 seconds
    } else {
      setError('Failed to post the job. Try again.')
    }
  } catch (err) {
    setError(err.message)
  }
}

  return (
    <div>
      <div>
        <Button onClick={() => setShowModal(true)}>Add New Post</Button>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>
          <Modal.Header closeButton className='mb-3'>
            <Modal.Title>Post a Job</Modal.Title>
          </Modal.Header>
          {error && <Alert variant='danger'>{error}</Alert>}
          {success && <Alert variant='success'>Job posted successfully!</Alert>}

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
