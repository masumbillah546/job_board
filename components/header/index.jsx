'use client'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import { CLASSES, COLORS } from '../../assets/styles/styles'
import Link from 'next/link'
import { useTheme } from '../../context/ThemeContext'
import UserSection from './UserSection'
import ThemeToggle from './ThemeToggle'

function Header() {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const { theme } = useTheme()

  return (
    <Navbar
      sticky='top'
      className='border-bottom-gray text-theme py-3'
      style={{
        zIndex: 100,
        backgroundColor: theme === 'light' ? COLORS.white : COLORS.black,
      }}
    >
      <Container fluid className='position-relative'>
        <Row className='w-100 m-0'>
          <Col className={CLASSES.content_between}>
            <div className='d-flex align-items-center gap-3'>
              <Link href={'/'} className={CLASSES.items_center}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='24'
                  height='24'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke={theme == 'dark' ? 'white' : 'black'}
                  stroke-width='2'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  class='lucide lucide-briefcase h-6 w-6'
                >
                  <path d='M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16'></path>
                  <rect width='20' height='14' x='2' y='6' rx='2'></rect>
                </svg>
                <span
                  style={{
                    fontSize: '1.2rem',
                    color: theme === 'light' ? COLORS.black : COLORS.white,
                  }}
                  className='ms-2'
                >
                  JobBoard
                </span>
              </Link>
              <Link href={'/jobs'} className={CLASSES.items_center}>
                <span
                  style={{
                    color: theme === 'light' ? COLORS.black : COLORS.white,
                  }}
                >
                  Jobs
                </span>
              </Link>
            </div>
            <div className={CLASSES.items_center + ' gap-2'}>
              <ThemeToggle />
              <UserSection />
            </div>
          </Col>
        </Row>
      </Container>
    </Navbar>
  )
}

export default Header
