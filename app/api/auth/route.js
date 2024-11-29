let users = [
  {
    id: 1,
    role: 'Admin',
    email: 'admin@demo.com',
    password: '123456',
  },
  {
    id: 2,
    role: 'Recruiter',
    email: 'masumbillah546@gmail.com',
    password: '123456',
  },
  {
    id: 3,
    role: 'Candidate',
    email: 'masumbillah546@gmail.com',
    password: '123456',
  },
]

import { NextResponse } from 'next/server'

// CREATE: login /registration
export async function POST(request) {
  const body = await request.json()
  const { email, password, type } = body
  const isAuthenticate = users.find(
    (user) => user.email == email && password == user.password,
  )
  if (isAuthenticate) {
    return NextResponse.json({
      success: true,
      isExist: type != 'login',
      message: type != 'login' ? 'Already registered' : 'Login successful..',
      user: isAuthenticate,
    })
  } else {
    const newUser = {
      id: users.length + 1,
      ...body,
    }
    users.push(newUser)
    return NextResponse.json({
      success: true,
      message: 'Account created successfully',
      user: newUser,
    })
  }
}
