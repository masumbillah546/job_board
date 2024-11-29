// pages/jobs/index.js
import { useSearchParams } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

export default function JobFilter({ jobs, handleFilter = () => {} }) {
  const searchParams = useSearchParams()
  const category = searchParams.get('category')
  const [jobCategories, setCategories] = useState([])
  const [jobTypes] = useState(['All', 'Full-Time', 'Freelance', 'Part-Time'])
  const [locations] = useState([
    'All',
    'Dhaka',
    'Chattogram',
    'Sylhet',
    'Cumilla',
    'Rajsahi',
    'Remote',
  ])

  const getData = useCallback(async () => {
    // setLoading(true)
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_APP_API_ENDPOINT + '/api/categories',
      )
      const data = await res.json()
      if (data) {
        setCategories([{ id: null, name: 'All' }, ...data])
      }
    } catch (error) {
      console.log(error)
    } finally {
      // setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container className='my-4'>
      {/* Filter Controls */}
      <Row className='mb-4'>
        <Col md={4} className='mb-2'>
          <Form.Label>Filter by type</Form.Label>
          <Form.Select
            onChange={(e) => {
              handleFilter({
                jobType: e.target.value != 'All' && e.target.value,
              })
            }}
          >
            {jobTypes.map((jobType) => (
              <option key={jobType} value={jobType}>
                {jobType}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4} className='mb-2'>
          <Form.Label>Filter by category</Form.Label>
          <Form.Select
            onChange={(e) => {
              handleFilter({
                category: e.target.value != 'All' && e.target.value,
              })
            }}
          >
            {category && (
              <option>
                {jobCategories.length > 0 &&
                  jobCategories.find((c) => c.id == category).name}
              </option>
            )}
            {jobCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4} className='mb-2'>
          <Form.Label>Filter by location</Form.Label>
          <Form.Select
            onChange={(e) => {
              handleFilter({
                location: e.target.value != 'All' && e.target.value,
              })
            }}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>
    </Container>
  )
}
