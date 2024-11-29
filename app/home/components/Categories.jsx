import { useCallback, useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { CLASSES } from '../../../assets/styles/styles'
import { Card, CardBody, Image } from 'react-bootstrap'
import Link from 'next/link'
// import Image from "next/image";

function Categories() {
  const [loading, setLoading] = useState(true)
  const [listType, setListType] = useState(1)
  const [categories, setCategories] = useState([])

  const getData = useCallback(async () => {
    setLoading(true)
    try {
      const res = await fetch(
        process.env.NEXT_PUBLIC_APP_API_ENDPOINT + '/api/categories',
      )
      const data = await res.json()
      if (data) {
        setCategories(data)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }, [])

  useEffect(() => {
    getData()
  }, [getData, listType])

  return (
    <Container className='py-5'>
      <Row className={CLASSES.content_center + 'mb-5'}>
        <h3 className='text-center' style={{ fontSize: 25 }}>
          Job Categories
        </h3>
        {categories.map((category) => (
          <Col key={category.id} xl={3} lg={4} sm={6} className='my-5'>
            <Link
              key={category}
              href={`/jobs?category=${category.id}`}
              className='position-relative mb-5'
            >
              <div
                style={{
                  aspectRatio: 1 / 1,
                  overflow: 'hidden',
                }}
                className={CLASSES.content_center}
              >
                <Image
                  height={'100%'}
                  src={'https://via.placeholder.com/300'}
                  className='pointer'
                />
              </div>
              <div
                style={{
                  // height: '100%',
                  // width: '100%',
                  position: 'absolute',
                  bottom: -40,
                  right: 0,
                  left: 0,
                }}
                className='px-4'
              >
                <Card
                  style={{ borderRadius: 0 }}
                  className='black-shadow-15 border-0'
                >
                  <CardBody>
                    <h6 className='text-theme text-bold'>{category.name}</h6>
                    <div>{category.description}</div>
                  </CardBody>
                </Card>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Categories
