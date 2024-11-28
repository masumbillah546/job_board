'use client'

import React, { useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap'
import { useTheme } from '../../../context/ThemeContext'

export default function LoginForm({ onLoginSuccess }) {
  const { theme } = useTheme()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)

  const handleLogin = (e) => {
    e.preventDefault()

    // Check if user exists and password matches
    const users = JSON.parse(localStorage.getItem('users')) || []
    const user = users.find(
      (user) => user.email === email && user.password === password,
    )

    if (!user) {
      setError('Invalid email or password.')
      return
    }

    // Simulate user login
    localStorage.setItem('loggedInUser', JSON.stringify(user))
    onLoginSuccess() // Notify parent to navigate home
  }

  return (
    <Form onSubmit={handleLogin}>
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
        Login
      </Button>
    </Form>
  )
}
