'use client'
// pages/jobs/[id].js
import React from "react";
// import { useRouter } from "next/router";
import { Container, Tab, Tabs } from "react-bootstrap";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("../components/ChatWidget"), {
  ssr: false, // Disable server-side rendering
  loading: () => <p>Loading Chat...</p>,
});

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
    description: "Build and maintain scalable web applications.",
    requirements: [
      "3+ years of experience in software development.",
      "Proficiency in JavaScript and React.",
    ],
    companyInfo: "TechCorp is a leading tech company specializing in innovative solutions.",
  },
  {
    id: 2,
    title: "Product Manager",
    company: "Innovate Inc.",
    location: "San Francisco, CA",
    salary: "$110,000 - $130,000",
    jobType: "Full-Time",
    experienceLevel: "Senior-Level",
    description: "Lead the product team to deliver high-quality solutions.",
    requirements: [
      "5+ years of experience in product management.",
      "Strong communication and leadership skills.",
    ],
    companyInfo: "Innovate Inc. is dedicated to driving innovation across industries.",
  },
  // Add more jobs...
];


export default function JobDetailPage() {
  // const router = useRouter();
  // const { id } = router.query;
  const { id } = { id: 1 };

  // Find the job by ID
  const job = jobs.find((job) => job.id === parseInt(id));

  // Handle job not found
  if (!job) {
    return (
      <Container className="mt-5 text-center">
        <h2>Job Not Found</h2>
        <p>{"The job you're looking for does not exist."}</p>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <h1 className="mb-4">{job.title}</h1>
      <h5 className="text-muted">{job.company}</h5>
      <p>
        <strong>Location:</strong> {job.location} | <strong>Salary:</strong>{" "}
        {job.salary} | <strong>Type:</strong> {job.jobType}
      </p>

      <ChatWidget job={job} />

      {/* Tabs for Description, Requirements, Company Info */}
      <Tabs defaultActiveKey="description" id="job-detail-tabs" className="mb-3">
        <Tab eventKey="description" title="Description">
          <p>{job.description}</p>
        </Tab>
        <Tab eventKey="requirements" title="Requirements">
          <ul>
            {job.requirements.map((req, index) => (
              <li key={index}>{req}</li>
            ))}
          </ul>
        </Tab>
        <Tab eventKey="company-info" title="Company Info">
          <p>{job.companyInfo}</p>
        </Tab>
      </Tabs>
    </Container>
  );
}
