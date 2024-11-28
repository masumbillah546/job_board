// pages/jobs/index.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { jobs } from "../page";

export default function JobListPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [locationFilter, setLocationFilter] = useState("All");
  const [jobTypeFilter, setJobTypeFilter] = useState("All");

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

  return (
    <Container className="mt-4">
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
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <Col key={job.id} md={6} lg={4} className="mb-4">
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
                  <Button variant="primary">View Details</Button>
                </Card.Body>
              </Card>
            </Col>
          ))
        ) : (
          <p className="text-center">No jobs found. Try adjusting your filters.</p>
        )}
      </Row>
    </Container>
  );
}
