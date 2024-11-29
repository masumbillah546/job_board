'use client'
import Link from 'next/link'
import React, { useState, useEffect, useCallback, Suspense } from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import JobFilter from './components/JobFilter'
import Pagination from './components/Pagination'
import FullPageLoader from '../../components/loader/FullPageLoader'
import { useSearchParams } from 'next/navigation'

export const encodeQuery = (data) => {
  let query = '?'
  for (const d in data) {
    if (data[d]) {
      query += `${encodeURIComponent(d)}=${encodeURIComponent(data[d])}&`
    }
  }
  return query.slice(0, -1)
}

export default function JobListPage() {
  const searchParams = useSearchParams()
  const category = searchParams.get('category');
  const keyword = searchParams.get('keyword');
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const jobsPerPage = 5 // Number of jobs to show per page
  const [loading, setLoading] = useState(true)
  const [jobPosts, setJobPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState({})

  const [user, setUser] = useState({})

  React.useEffect(() => {
    const data = JSON.parse(localStorage.getItem('loggedInUser'))
    setUser(data || {})
  }, [])

  const getData = useCallback(async (query) => {
    setLoading(true)
    const _encodeQuery = encodeQuery(query)
    console.log(_encodeQuery)
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_APP_API_ENDPOINT + '/api/jobs' + _encodeQuery,
      )
      const data = await res.json()
      if (data) {
        setJobPosts(data.currentJobs)
        setTotalPage(data.totalPages)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData({
      category: category,
      keyword: keyword,
      jobsPerPage,
      currentPage,
      ...searchQuery,
    })
  }, [getData, searchQuery, jobsPerPage, currentPage])

  const handleFilter = (query) => {
    setSearchQuery((oq) => ({ ...oq, ...query }))
    setCurrentPage(1)
    setTotalPage(0)
  }

  return (
    <Suspense fallback={<p>Loading...</p>}>

    <div className='position-relative'>
      <Container
        className='mt-4'
        style={{
          pointerEvent: loading ? 'none' : 'auto',
          opacity: loading ? 0.5 : 1,
        }}
      >
        {(user?.role == 'Recruiter' || user?.role == 'Admin') && (
          <Link href='/jobs/post-job' passHref>
            <Button variant='success' className='mb-4'>
              Post a Job
            </Button>
          </Link>
        )}

        <h1 className='text-center mb-4'>Job Listings</h1>

        {/* Filter Controls */}
        <JobFilter jobs={jobPosts} handleFilter={handleFilter} />
        {/* Job List */}
        <Row>
          {jobPosts.length > 0 ? (
            jobPosts.map((job) => (
              <Col key={job.id} xs={12} className='mb-4'>
                <Card>
                  <Card.Body>
                    <Card.Title>{job.title}</Card.Title>
                    <Card.Subtitle className='mb-2 text-muted'>
                      {job.company}
                    </Card.Subtitle>
                    <Card.Text>
                      <strong>Location:</strong> {job.location}
                      <br />
                      <strong>Salary:</strong> {job.salary}
                      <br />
                      <strong>Type:</strong> {job.jobType}
                    </Card.Text>
                    <Link href={`/jobs/${job.id}`} passHref>
                      <Button variant='primary'>View Details</Button>
                    </Link>
                  </Card.Body>
                </Card>
              </Col>
            ))
          ) : (
            <p className='text-center'>
              No jobs found. Try adjusting your filters.
            </p>
          )}
        </Row>
        <Pagination
          totalPages={totalPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </Container>
      {loading && <FullPageLoader loading={loading} />}
    </div>
    </Suspense>
  )
}
