'use client'

import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useTheme } from '../../../context/ThemeContext'

export default function SignupForm({ onSignupSuccess }) {
  const { theme } = useTheme()
  const [email, setEmail] = useState('')
  const [role, setRole] = useState('Admin')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  // Validate form
  const validateForm = () => {
    console.log(role)
    if (!email || !password || !role) {
      setError('All fields are required.')
      return false
    }
    setError('')
    return true
  }

  // Submit form
  const handleSignup = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_APP_API_ENDPOINT + '/api/auth',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, password, role, type: 'registration' }),
        },
      )
      const result = await response.json()
      if (result.success && !result.isExist) {
        // localStorage.setItem(
        //   'loggedInUser',
        //   JSON.stringify({ email, password, role }),
        // )
        onSignupSuccess() // Notify parent to navigate home
      } else if (result.success && result.isExist) {
        setError('User already exist.')
        return
      } else {
        setError('Invalid email or password.')
        return
      }
    } catch (err) {
      setError(err.message)
    }
  }

  return (
    <Form onSubmit={handleSignup}>
      {error && <Alert variant='danger'>{error}</Alert>}
      <Form.Group className='mb-3'>
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type='email'
          placeholder='Enter email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>User role</Form.Label>
        <Form.Select
          style={{ borderColor: 'black' }}
          defaultValue={'Admin'}
          onChange={(e) => {
            setRole(e.target.value)
          }}
        >
          {['Admin', 'Candidate', 'Recruiter'].map((jobType) => (
            <option key={jobType} value={jobType}>
              {jobType}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3'>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type='password'
          placeholder='Password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Button
        variant={theme == 'dark' ? 'light' : 'dark'}
        type='submit'
        className='w-100 py-2'
      >
        Sign Up
      </Button>
    </Form>
  )
}
