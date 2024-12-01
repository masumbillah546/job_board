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
  if (isAuthenticate && type == 'registration') {
    return NextResponse.json({
      success: true,
      isExist: true,
      message: 'Already registered',
      user: isAuthenticate,
    })
  } else  if (isAuthenticate && type == 'login') {
    return NextResponse.json({
      success: true,
      isExist: false,
      message: 'Login successful..',
      user: isAuthenticate,
    })
  } else if (!isAuthenticate && type == 'registration') {
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
  } else {
    return NextResponse.json({
      success: false,
      message: 'Invalid email or password',
    })
  }
}
