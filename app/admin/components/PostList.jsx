import { Button, Container } from 'react-bootstrap'
import Table from 'react-bootstrap/Table'
import { CLASSES } from '../../../assets/styles/styles'
import { useCallback, useEffect, useState } from 'react'
import { encodeQuery } from '../../jobs/page'
import Pagination from '../../jobs/components/Pagination'

function PostList() {
  const [currentPage, setCurrentPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)
  const jobsPerPage = 5 // Number of jobs to show per page
  const [loading, setLoading] = useState(true)
  const [jobPosts, setJobPosts] = useState([])
  const [searchQuery, setSearchQuery] = useState({})

  const getData = useCallback(async (query) => {
    setLoading(true)
    const _encodeQuery = encodeQuery(query)
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
      jobsPerPage,
      currentPage,
      ...searchQuery,
    })
  }, [getData, searchQuery, jobsPerPage, currentPage])

  return (
    <Container>
      <Table striped bordered hover className='mt-4'>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Company</th>
            <th>Salary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {jobPosts.map((job, i) => (
            <tr key={i}>
              <td>{job.id}</td>
              <td>{job.title}</td>
              <td>{job.description}</td>
              <td>{job.company}</td>
              <td>{job.salary}</td>
              <td className={CLASSES.content_center + ' gap-2'}>
                <Button variant='info'>Edit</Button>
                <Button variant='danger'>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination
        totalPages={totalPage}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </Container>
  )
}

export default PostList
