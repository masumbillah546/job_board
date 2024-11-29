'use client'
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container, Tab, Tabs } from "react-bootstrap";
import dynamic from "next/dynamic";

const ChatWidget = dynamic(() => import("../components/ChatWidget"), {
  ssr: false, // Disable server-side rendering
  loading: () => <p>Loading Chat...</p>,
});

export default function JobDetailPage({params}) {
  const router = useRouter();
  const [job, setJob] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_APP_API_ENDPOINT}/api/jobs/${params?.id}`);
        if (!response.ok) {
          throw new Error('Job not found');
        }
        const data = await response.json();
        setJob(data);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchJob();
  }, [params?.id]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!job) {
    return <div>Loading...</div>;
  }

  return (
    <Container className="mt-4">
      <h1 className="mb-4">{job.title}</h1>
      <h5 className="text-secondary">{job.company}</h5>
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
