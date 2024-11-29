'use client'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import NewPostForm from '../components/NewPostForm'
import PostList from '../components/PostList'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [user] = useState(
    JSON.parse(localStorage.getItem('loggedInUser')) || {},
  )

  useEffect(() => {
    if (!user?.email || user?.role != 'Admin') {
      router.push('/auth')
    }
  }, [])

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validateForm()) return

    try {
      const response = await fetch('http://localhost:5000/jobs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, id: Date.now() }),
      })

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
    <>
      {user.email ? (
        <Container className='my-4'>
          <NewPostForm />
          <PostList />
        </Container>
      ) : null}
    </>
  )
}
