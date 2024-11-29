'use client'
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap'
import React, { useState } from 'react'
import SignupForm from './components/SignupForm'
import LoginForm from './components/LoginForm'

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true)

  const handleSignupSuccess = () => {
    // alert('Signup successful! Please log in.')
    setIsLogin(true)
  }

  const handleLoginSuccess = (type = 'login') => {
    window.location.href = '/'
    // Redirect to home or dashboard
  }

  return (
    <Container className='mt-5 px-5'>
      <Row className='justify-content-center'>
        <Col md={6} lg={4} className='border rounded p-4'>
          <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
          {isLogin ? (
            <LoginForm onLoginSuccess={handleLoginSuccess} />
          ) : (
            <SignupForm onSignupSuccess={handleSignupSuccess} />
          )}
          <p style={{ marginTop: '20px' }}>
            {isLogin ? (
              <>
                {"Don't have an account?"}{' '}
                <button
                  style={{
                    border: 'none',
                    background: 'none',
                    color: 'blue',
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsLogin(false)}
                >
                  Sign Up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  style={{
                    border: 'none',
                    background: 'none',
                    color: 'blue',
                    cursor: 'pointer',
                  }}
                  onClick={() => setIsLogin(true)}
                >
                  Login
                </button>
              </>
            )}
          </p>
        </Col>
      </Row>
    </Container>
  )
}
