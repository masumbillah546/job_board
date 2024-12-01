'use client'
import React, { useEffect, useState } from 'react'
import { Container, Table } from 'react-bootstrap'
import NewPostForm from '../components/NewPostForm'
import PostList from '../components/PostList'
import { useRouter } from 'next/navigation'

export default function Dashboard() {
  const router = useRouter()
  const [user, setUser] = useState({})
  const [job, setJob] = useState({})

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('loggedInUser'))
    setUser(data || {})
  }, [])

  useEffect(() => {
    if (user.email && user?.role != 'Admin') {
      router.push('/auth')
    }
  }, [user])

  
  return (
    <>
      {user.email ? (
        <Container className='my-4'>
          <NewPostForm job={job} setJob={setJob}/>
          <PostList setData={setJob} />
        </Container>
      ) : null}
    </>
  )
}
