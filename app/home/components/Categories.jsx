import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import { CLASSES } from '../../../assets/styles/styles'
import { Card, CardBody, Image } from 'react-bootstrap'
// import Image from "next/image";

export const jobCategories = [
  {
    id: 1,
    name: "Software Development",
    description: "Jobs for developers, engineers, and programmers.",
    image: "https://via.placeholder.com/150?text=Software+Dev", // Dummy image
  },
  {
    id: 2,
    name: "Design & Creative",
    description: "UI/UX designers, graphic artists, and creative roles.",
    image: "https://via.placeholder.com/150?text=Design+Creative",
  },
  {
    id: 3,
    name: "Marketing",
    description: "Marketing specialists, SEO experts, and strategists.",
    image: "https://via.placeholder.com/150?text=Marketing",
  },
  {
    id: 4,
    name: "Project Management",
    description: "Project managers, scrum masters, and coordinators.",
    image: "https://via.placeholder.com/150?text=Project+Management",
  },
  {
    id: 5,
    name: "Customer Support",
    description: "Customer service reps, support specialists, and help desk roles.",
    image: "https://via.placeholder.com/150?text=Customer+Support",
  },
  {
    id: 6,
    name: "Sales",
    description: "Sales representatives, account executives, and business developers.",
    image: "https://via.placeholder.com/150?text=Sales",
  },
  {
    id: 7,
    name: "Finance & Accounting",
    description: "Accountants, financial analysts, and tax professionals.",
    image: "https://via.placeholder.com/150?text=Finance+Accounting",
  },
  {
    id: 8,
    name: "Healthcare",
    description: "Nurses, doctors, and healthcare specialists.",
    image: "https://via.placeholder.com/150?text=Healthcare",
  },
];

function Categories({ data = jobCategories }) {
  return (
    <Container className='py-5'>
      <Row className={CLASSES.content_center + 'mb-5'}>
        <h3 className='text-center' style={{fontSize: 25}}>Job Categories</h3>
        {data.map((category, i) => (
          <Col key={category.id} xl={3} lg={4}  sm={6} className='my-4'>
            <div className='position-relative mb-5'>
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
                  // onClick={() => setActive((x) => !x)}
                />
                  {/* <Image
                    src={'https://via.placeholder.com/300'} // Use a placeholder if no image exists
                    alt={'job.title'}
                    width={300}
                    height={300}
                    layout="responsive"
                    placeholder="blur" // Optional: Use a blurred placeholder
                    blurDataURL="https://via.placeholder.com/300" // Path to placeholder image
                  /> */}
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
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default Categories
