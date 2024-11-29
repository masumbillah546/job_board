'use client'
import { Container, Pagination as Pagi } from 'react-bootstrap'

export default function Pagination({
  totalPages = 0,
  currentPage = 1,
  setCurrentPage = () => {},
}) {
  return (
    <Container className='mt-4'>
      {/* Pagination */}
      {totalPages > 1 && (
        <Pagi className='justify-content-center mt-4'>
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagi.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </Pagi.Item>
          ))}
        </Pagi>
      )}
    </Container>
  )
}
