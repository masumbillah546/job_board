'use client'
import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Navbar from 'react-bootstrap/Navbar'
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import ButtonsSection from './ButtonsSection'
import { CLASSES, COLORS } from '../../assets/styles/styles'
// import MenuIcon from '../../assets/icons/header/menu.svg'
// import CloseIcon from '../../assets/icons/common/cancel-white.svg'
// import Sidebar from '../sidebar/Sidebar'
import { Offcanvas } from 'react-bootstrap'
import Link from 'next/link'
import { useTheme } from '../../context/ThemeContext'

function Header() {
  const [showSidebar, setShowSidebar] = React.useState(false)
  const { theme } = useTheme();


  return (
    <>
      <Navbar
        sticky='top'
        collapseOnSelect
        expand='lg'
        className='border-bottom-gray text-theme py-3'
        style={{ zIndex: 99, backgroundColor: theme === 'light' ? COLORS.white : COLORS.black, color: theme === 'light' ? COLORS.black : COLORS.white }}
      >
        <Container fluid className='position-relative'>
          <Row className='w-100 m-0'>
            <Col className={CLASSES.content_between}>
              <div className='d-flex align-items-center gap-3'>
                <Link href={'/'} className={CLASSES.items_center}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-briefcase h-6 w-6"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect width="20" height="14" x="2" y="6" rx="2"></rect></svg>
                  <span style={{fontSize: '1.2rem'}} className="ms-2">JobBoard</span>
                </Link>
                <Link href={'/jobs'} className={CLASSES.items_center}>
                  Jobs
                </Link>
              </div>
              <div className='d-flex align-items-center'>
                <ButtonsSection />
                {/* <UserSection /> */}
                {/* <div
                  onClick={() => setShowSidebar(true)}
                  className='pointer sidebar-toggle ms-3'
                >
                  <Image height={40} src={'https://via.placeholder.com/30'} />
                </div> */}
              </div>
            </Col>
          </Row>
        </Container>
      </Navbar>

      <Offcanvas
        placement='start'
        show={showSidebar}
        onHide={() => setShowSidebar(false)}
        className='bg-theme'
      >
        <Offcanvas.Header
          closeButton={false}
          className={CLASSES.content_end + 'black-shadow-15'}
          style={{ position: 'absolute', right: 10, top: 5 }}
        >
          <div onClick={() => setShowSidebar(false)} className={'pointer'}>
            <Image height={40} src={'https://via.placeholder.com/30'} />
          </div>
        </Offcanvas.Header>
        <Offcanvas.Body className='p-0'>write something</Offcanvas.Body>
      </Offcanvas>
    </>
  )
}

export default Header
