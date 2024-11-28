import React from 'react'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import './header.css'

import SearchIcon from '../../assets/icons/common/search.svg'

function Search() {
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
