import React from 'react'
// import Nav from 'react-bootstrap/Nav'
import Image from 'react-bootstrap/Image'
import { CLASSES } from '../../assets/styles/styles'
import { Dropdown } from 'react-bootstrap'

function UserSection({}) {
  // React.useEffect(() => {
  //   if (showMenu) {
  //     var dropdown = document.querySelector('.user-menu-btn')
  //     const handleShowMenu = (event) => {
  //       console.log('clicked outside user menu...')
  //       var isClickInside = dropdown?.contains(event.target)
  //       if (!isClickInside) {
  //         setShowMenu(false)
  //       }
  //     }
  //     document.addEventListener('click', handleShowMenu)
  //     return () => {
  //       document.addEventListener('click', handleShowMenu)
  //     }
  //   }
  // }, [showMenu])

  const handleLogout = () => {
   
  }

  return (
    <div className={CLASSES.content_end}>
      <Dropdown>
        <Dropdown.Toggle
          className={CLASSES.content_end + 'text-white'}
          variant=''
          id='dropdown-basic'
        >
          <div
            className={CLASSES.content_center}
            style={{
              height: 40,
              aspectRatio: 1 / 1,
              overflow: 'hidden',
              borderRadius: '100%',
            }}
          >
            <Image
              style={{ height: 40 }}
              src={
                'https://img.freepik.com/free-photo/handsome-bearded-guy-posing-against-white-wall_273609-20597.jpg?size=626&ext=jpg&ga=GA1.1.1700460183.1708387200&semt=sph'
              }
            />
          </div>
          <div className={'d-flex justify-content-between align-items-start ms-3 user-name-show-hide'}>
            <div style={{textAlign: 'initial', maxWidth: 105 }}>
              <div style={{fontSize: 14, textOverflow: 'ellipsis', overflow: 'hidden'}}>Rasel Mahmud</div>
              <div style={{fontSize: 12, textOverflow: 'ellipsis', overflow: 'hidden'}}>Super Admin</div>
            </div>
            <Image src={'https://img.icons8.com/ios/50/000000/expand-arrow.png'} className='ms-3 mt-2' />
          </div>
        </Dropdown.Toggle>
        <Dropdown.Menu className={'black-shadow-15'}>
          <Dropdown.Item
            className='item text-bold'
            onClick={() => {}}
            // active={}
          >
            Profile
          </Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item
            className='item text-bold'
            onClick={handleLogout}
            // active={}
          >
            Logout
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default UserSection
