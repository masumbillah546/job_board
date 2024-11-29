let jobs = [
  {
    id: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'Remote',
    salary: '$120,000 - $140,000',
    jobType: 'Full-Time',
    category: 1,
    experienceLevel: 'Mid-Level',
    description: "Build and maintain scalable web applications.",
    requirements: [
      "3+ years of experience in software development.",
      "Proficiency in JavaScript and React.",
    ],
    companyInfo: "TechCorp is a leading tech company specializing in innovative solutions.",
  },
  {
    id: 2,
    title: 'Product Manager',
    company: 'Innovate Inc.',
    location: 'San Francisco, CA',
    salary: '$110,000 - $130,000',
    jobType: 'Full-Time',
    category: 1,
    experienceLevel: 'Senior-Level',
    description: "Lead the product team to deliver high-quality solutions.",
    requirements: [
      "5+ years of experience in product management.",
      "Strong communication and leadership skills.",
    ],
    companyInfo: "Innovate Inc. is dedicated to driving innovation across industries.",
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    company: 'Designify',
    location: 'New York, NY',
    salary: '$90,000 - $110,000',
    jobType: 'Part-Time',
    category: 1,
    experienceLevel: 'Mid-Level',
    description: "Lead the product team to deliver high-quality solutions.",
    requirements: [
      "5+ years of experience in product management.",
      "Strong communication and leadership skills.",
    ],
    companyInfo: "Innovate Inc. is dedicated to driving innovation across industries.",
  },
  {
    id: 4,
    title: 'Data Scientist',
    company: 'DataDriven',
    location: 'Remote',
    salary: '$130,000 - $160,000',
    jobType: 'Full-Time',
    category: 1,
    experienceLevel: 'Senior-Level',
    description: "Lead the product team to deliver high-quality solutions.",
    requirements: [
      "5+ years of experience in product management.",
      "Strong communication and leadership skills.",
    ],
    companyInfo: "Innovate Inc. is dedicated to driving innovation across industries.",
  },
];

import { NextResponse } from 'next/server';

// READ: Get all jobs
// export async function GET() {
//   return NextResponse.json(jobs);
// }

export async function GET(request, {params}) {
  const { id } = params;

  // Filter jobs based on query parameters
  if (id) {
    const viewJob = jobs.find((job) => job.id === parseInt(id, 10));
    return NextResponse.json(viewJob);
  }
}

// CREATE: Add a new job
export async function POST(request) {
  const body = await request.json();
  const newJob = {
    id: jobs.length + 1,
    ...body,
  };
  jobs.push(newJob);
  return NextResponse.json({success: true, message: 'Job created successfully', job: newJob });
}

// UPDATE: Update a job by ID
export async function PUT(request) {
  const body = await request.json();
  const { id, ...updates } = body;

  const jobIndex = jobs.findIndex((job) => job.id === id);
  if (jobIndex === -1) {
    return NextResponse.json({ message: 'Job not found' }, { status: 404 });
  }

  jobs[jobIndex] = { ...jobs[jobIndex], ...updates };
  return NextResponse.json({
    message: 'Job updated successfully',
    job: jobs[jobIndex],
  });
}

// DELETE: Delete a job by ID
export async function DELETE(request) {
  const { searchParams } = new URL(request.url);
  const id = parseInt(searchParams.get('id'), 10);

  const jobIndex = jobs.findIndex((job) => job.id === id);
  if (jobIndex === -1) {
    return NextResponse.json({ message: 'Job not found' }, { status: 404 });
  }

  const deletedJob = jobs.splice(jobIndex, 1);
  return NextResponse.json({
    message: 'Job deleted successfully',
    job: deletedJob[0],
  });
}
