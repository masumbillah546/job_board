'use client'
import React, { useState } from "react";
// import { useRouter } from "next/router";
import { Container, Form, Button, Alert } from "react-bootstrap";

export default function Dashboard() {
  // const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    category: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Validate form
  const validateForm = () => {
    const { title, description, location, category } = formData;
    if (!title || !description || !location || !category) {
      setError("All fields are required.");
      return false;
    }
    setError("");
    return true;
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      const response = await fetch("http://localhost:5000/jobs", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formData, id: Date.now() }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ title: "", description: "", location: "", category: "" });
        setTimeout(() => {
          // router.push("/jobs");
        }, 2000); // Redirect to Job Listings page after 2 seconds
      } else {
        setError("Failed to post the job. Try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <Container className="my-4">
      <h1 className="mb-4">Post a Job</h1>

      {error && <Alert variant="danger">{error}</Alert>}
      {success && <Alert variant="success">Job posted successfully!</Alert>}

      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Job Title</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter job title"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formDescription" className="mb-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            placeholder="Enter job description"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formLocation" className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter job location"
            name="location"
            value={formData.location}
            onChange={handleChange}
          />
        </Form.Group>

        <Form.Group controlId="formCategory" className="mb-3">
          <Form.Label>Category</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter job category"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Post Job
        </Button>
      </Form>
    </Container>
  );
}
