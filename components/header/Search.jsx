import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import './header.css'

import SearchIcon from '../../assets/icons/common/search.svg'

function Search() {
  const onClick = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <div className='px-0 px-md-2' style={{ minWidth: '30%' }}>
      <InputGroup className='px-0 border-gray radius-100 overflow-hidden'>
        <Form.Control
          placeholder='Search'
          aria-label='Search'
          aria-describedby='basic-addon2'
          className='border-0 search-input'
        />
        <button className='search-button px-3'>
          <Image src={SearchIcon} />
        </button>
      </InputGroup>
    </div>
  )
}

export default Search
