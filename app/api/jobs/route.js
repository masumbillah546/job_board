let jobs = [
  {
    id: 1,
    userId: 1,
    featured: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'Remote',
    salary: '$120,000 - $140,000',
    jobType: 'Full-Time',
    category: 1,
    experienceLevel: 'Mid-Level',
    description: 'Design and develop scalable web applications.',
    requirements: [
      '3+ years of experience in software development.',
      'Proficiency in JavaScript, React, and Node.js.',
    ],
    companyInfo: 'TechCorp is a leading provider of tech solutions worldwide.',
  },
  {
    id: 2,
    userId: 1,
    title: 'Graphic Designer',
    company: 'CreativeWorks',
    location: 'Rajsahi',
    salary: '$70,000 - $90,000',
    jobType: 'Full-Time',
    category: 2,
    experienceLevel: 'Junior-Level',
    description: 'Create visually appealing designs for marketing materials.',
    requirements: [
      '1+ year of experience in graphic design.',
      'Proficiency in Adobe Creative Suite.',
    ],
    companyInfo: 'CreativeWorks specializes in branding and design.',
  },
  {
    id: 3,
    userId: 1,
    featured: 1,
    title: 'Freelance Copywriter',
    company: 'ContentPro',
    location: 'Remote',
    salary: '$50/hour',
    jobType: 'Freelance',
    category: 3,
    experienceLevel: 'Mid-Level',
    description: 'Write engaging content for blogs and websites.',
    requirements: [
      '2+ years of writing experience.',
      'Strong portfolio of published work.',
    ],
    companyInfo: 'ContentPro connects talented writers with top clients.',
  },
  {
    id: 4,
    userId: 1,
    title: 'Registered Nurse',
    company: 'HealthFirst',
    location: 'Rajsahi',
    salary: '$80,000 - $100,000',
    jobType: 'Full-Time',
    category: 4,
    experienceLevel: 'Mid-Level',
    description: 'Provide patient care in a clinical setting.',
    requirements: [
      'Valid nursing license.',
      '3+ years of clinical experience.',
    ],
    companyInfo: 'HealthFirst is a leading healthcare provider.',
  },
  {
    id: 5,
    userId: 1,
    title: 'High School Teacher',
    company: 'Bright Future Academy',
    location: 'Chattogram',
    salary: '$50,000 - $70,000',
    jobType: 'Full-Time',
    category: 5,
    experienceLevel: 'Mid-Level',
    description: 'Teach high school students in a collaborative environment.',
    requirements: [
      'Bachelor’s degree in education or related field.',
      'Teaching certification.',
    ],
    companyInfo: 'Bright Future Academy fosters academic excellence.',
  },
  {
    id: 6,
    userId: 1,
    featured: 1,
    title: 'Accountant',
    company: 'FinancePlus',
    location: 'Remote',
    salary: '$60,000 - $80,000',
    jobType: 'Full-Time',
    category: 6,
    experienceLevel: 'Junior-Level',
    description: 'Manage company accounts and financial records.',
    requirements: [
      'Bachelor’s degree in accounting or finance.',
      'Proficiency in QuickBooks and Excel.',
    ],
    companyInfo: 'FinancePlus offers financial services to startups.',
  },
  {
    id: 7,
    userId: 1,
    title: 'Paralegal',
    company: 'LawFirm & Co.',
    location: 'Chattogram',
    salary: '$50,000 - $70,000',
    jobType: 'Full-Time',
    category: 7,
    experienceLevel: 'Mid-Level',
    description: 'Assist lawyers with case preparation and research.',
    requirements: [
      '2+ years of paralegal experience.',
      'Certification in paralegal studies.',
    ],
    companyInfo: 'LawFirm & Co. specializes in corporate law.',
  },
  {
    id: 8,
    userId: 1,
    featured: 1,
    title: 'Production Supervisor',
    company: 'BuildPro',
    location: 'Dhaka',
    salary: '$55,000 - $75,000',
    jobType: 'Full-Time',
    category: 8,
    experienceLevel: 'Mid-Level',
    description: 'Oversee production operations and ensure quality.',
    requirements: [
      '3+ years of experience in manufacturing.',
      'Strong leadership and organizational skills.',
    ],
    companyInfo: 'BuildPro is a top manufacturer in the automotive industry.',
  },
  {
    id: 9,
    userId: 1,
    title: 'Civil Engineer',
    company: 'ConstructIt',
    location: 'Rajsahi',
    salary: '$90,000 - $120,000',
    jobType: 'Full-Time',
    category: 9,
    experienceLevel: 'Senior-Level',
    description: 'Design and manage construction projects.',
    requirements: [
      'Bachelor’s degree in civil engineering.',
      '5+ years of experience in construction.',
    ],
    companyInfo: 'ConstructIt is known for innovative construction solutions.',
  },
  {
    id: 10,
    userId: 1,
    title: 'Store Manager',
    company: 'RetailX',
    location: 'Sylhet',
    salary: '$40,000 - $60,000',
    jobType: 'Full-Time',
    category: 10,
    experienceLevel: 'Mid-Level',
    description: 'Manage daily store operations and team performance.',
    requirements: [
      '2+ years of retail management experience.',
      'Strong communication and leadership skills.',
    ],
    companyInfo: 'RetailX is a nationwide chain of retail stores.',
  },
  {
    id: 11,
    userId: 1,
    title: 'Software Engineer',
    company: 'TechCorp',
    location: 'Dhaka',
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
    id: 12,
    userId: 1,
    title: 'Product Manager',
    company: 'Innovate Inc.',
    location: 'Sylhet',
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
    id: 13,
    userId: 1,
    title: 'UI/UX Designer',
    company: 'Designify',
    location: 'Dhaka',
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
    id: 14,
    userId: 1,
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

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  
  // Extract query parameters
  const category = searchParams.get('category');
  const location = searchParams.get('location');
  const jobType = searchParams.get('jobType');
  const keyword = searchParams.get('keyword');
  const featured = searchParams.get('featured');

  //pagination
  const jobsPerPage = searchParams.get('jobsPerPage') || 4;
  const currentPage = searchParams.get('currentPage') || 1;
  const indexOfLastJob = currentPage * jobsPerPage
  const indexOfFirstJob = indexOfLastJob - jobsPerPage
  
  let filteredJobs = jobs;

  if (featured) {
    filteredJobs = filteredJobs.filter((job) => job.featured == featured);
  }
  
  if (category) {
    filteredJobs = filteredJobs.filter((job) => job.category == category);
  }

  if (location) {
    filteredJobs = filteredJobs.filter((job) => job.location.toLowerCase().includes(location.toLowerCase()));
  }

  if (jobType) {
    filteredJobs = filteredJobs.filter((job) => job.jobType.toLowerCase() === jobType.toLowerCase());
  }
  
  if (keyword) {
    filteredJobs = filteredJobs.filter((job) =>
      job.title.toLowerCase().includes(keyword.toLowerCase())
  );
}
const totalPages = Math.ceil(filteredJobs.length / jobsPerPage) || 0
const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob)
  return NextResponse.json({
    currentJobs,
    totalPages,
    currentPage,
    jobsPerPage
  });
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

  const jobIndex = jobs.findIndex((job) => job.id == id);
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

  const jobIndex = jobs.findIndex((job) => job.id == id);
  if (jobIndex === -1) {
    return NextResponse.json({ message: 'Job not found' }, { status: 404 });
  }

  const deletedJob = jobs.splice(jobIndex, 1);
  return NextResponse.json({
    message: 'Job deleted successfully',
    job: deletedJob[0],
  });
}
