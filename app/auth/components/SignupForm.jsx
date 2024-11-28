'use client'

import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useTheme } from '../../../context/ThemeContext'

export default function SignupForm({ onSignupSuccess }) {
  const { theme } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleSignup = (e) => {
    e.preventDefault()

    // Check if user already exists in localStorage
    const users = JSON.parse(localStorage.getItem('users')) || []
    const userExists = users.find((user) => user.email === email)

    if (userExists) {
      setError('User already exists. Please login.')
      return
    }

    // Add new user to localStorage
    users.push({ email, password })
    localStorage.setItem('users', JSON.stringify(users))
    onSignupSuccess() // Notify parent to switch to login
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
