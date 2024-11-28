'use client'
import Link from "next/link";
// pages/jobs/index.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form, Pagination  } from "react-bootstrap";
// data/jobs.js
export const jobs = [
  {
    id: 1,
    title: "Software Engineer",
    company: "TechCorp",
    location: "Remote",
    salary: "$120,000 - $140,000",
    jobType: "Full-Time",
    experienceLevel: "Mid-Level",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "San Francisco, CA",
    salary: "$110,000 - $130,000",
    jobType: "Full-Time",
    experienceLevel: "Senior-Level",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    company: "Designify",
    location: "New York, NY",
    salary: "$90,000 - $110,000",
    jobType: "Part-Time",
    experienceLevel: "Mid-Level",
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "DataDriven",
    location: "Remote",
    salary: "$130,000 - $160,000",
    jobType: "Full-Time",
    experienceLevel: "Senior-Level",
  },
];


export default function JobListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [jobTypeFilter, setJobTypeFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 6; // Number of jobs to show per page

  // Get unique locations and job types for dropdown filters
  const locations = ["All", ...new Set(jobs.map((job) => job.location))];
  const jobTypes = ["All", ...new Set(jobs.map((job) => job.jobType))];

  // Filter jobs based on search term and filters
  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = locationFilter === "All" || job.location === locationFilter;
    const matchesJobType = jobTypeFilter === "All" || job.jobType === jobTypeFilter;
    return matchesSearch && matchesLocation && matchesJobType;
  });

  // Pagination: Calculate jobs to display on the current page
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  // Handle pagination
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <Container className="mt-4">
      <Link href="/jobs/post-job" passHref>
        <Button variant="success" className="mb-4">
          Post a Job
        </Button>
      </Link>

      <h1 className="text-center mb-4">Job Listings</h1>

      {/* Filter Controls */}
      <Row className="mb-4">
        <Col md={4}>
          <Form.Control
            type="text"
            placeholder="Search jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </Col>
        <Col md={4}>
          <Form.Select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </Form.Select>
        </Col>
        <Col md={4}>
          <Form.Select
            value={jobTypeFilter}
            onChange={(e) => setJobTypeFilter(e.target.value)}
          >
            {jobTypes.map((jobType) => (
              <option key={jobType} value={jobType}>
                {jobType}
              </option>
            ))}
          </Form.Select>
        </Col>
      </Row>

      {/* Job List */}
      <Row>
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <Col key={job.id} xs={12} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>{job.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
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
                    <Button variant="primary">View Details</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No jobs found. Try adjusting your filters.</p>
        )}
      </Row>

      {/* Pagination */}
      {totalPages > 1 && (
        <Pagination className="justify-content-center mt-4">
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index + 1}
              active={index + 1 === currentPage}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
        </Pagination>
      )}
    </Container>
  );
}
