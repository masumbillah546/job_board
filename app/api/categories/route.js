import { NextResponse } from 'next/server';

let jobCategories = [
  { id: 1, name: 'Tech', description: 'Information Technology jobs like software development, IT support, etc.' },
  { id: 2, name: 'Creative', description: 'Jobs in design, content creation, and visual arts.' },
  { id: 3, name: 'Freelance & Gig', description: 'Independent work like freelancing, consulting, or contract jobs.' },
  { id: 4, name: 'Healthcare', description: 'Roles in medicine, nursing, and allied health services.' },
  { id: 5, name: 'Education', description: 'Jobs in teaching, training, and academic research.' },
  { id: 6, name: 'Finance', description: 'Banking, accounting, and investment-related roles.' },
  { id: 7, name: 'Legal', description: 'Careers in law, legal advisory, and compliance.' },
  { id: 8, name: 'Manufacturing', description: 'Roles in production, factory operations, and quality control.' },
  { id: 9, name: 'Construction', description: 'Jobs in building, architecture, and civil engineering.' },
  { id: 10, name: 'Retail', description: 'Roles in store management, sales, and customer service.' },
  { id: 11, name: 'Hospitality', description: 'Jobs in tourism, hotels, and event management.' },
  { id: 12, name: 'Transportation', description: 'Careers in logistics, supply chain, and delivery services.' },
  { id: 13, name: 'Government', description: 'Public sector jobs, including administration and policymaking.' },
  { id: 14, name: 'Agriculture', description: 'Jobs in farming, forestry, and agricultural technology.' },
  { id: 15, name: 'Energy', description: 'Roles in renewable energy, oil & gas, and utilities.' },
  { id: 16, name: 'Media', description: 'Careers in journalism, broadcasting, and entertainment.' },
  { id: 17, name: 'Science & Research', description: 'Jobs in laboratories, research facilities, and innovation centers.' },
  { id: 18, name: 'Real Estate', description: 'Roles in property management, sales, and urban planning.' },
  { id: 19, name: 'Customer Service', description: 'Support roles for helping customers with inquiries and issues.' },
  { id: 20, name: 'Freelance & Gig', description: 'Independent work like freelancing, consulting, or contract jobs.' },
];

// READ: Get all jobs
export async function GET() {
  return NextResponse.json(jobCategories);
}


// let jobs = [
//   { id: 1, title: 'Software Engineer' },
//   { id: 2, title: 'Product Manager' },
//   { id: 3, title: 'UI/UX Designer' },
//   { id: 4, title: 'Data Scientist' },
//   { id: 5, title: 'Marketing Specialist' },
//   { id: 6, title: 'DevOps Engineer' },
//   { id: 7, title: 'Graphic Designer' },
//   { id: 8, title: 'Sales Executive' },
//   { id: 9, title: 'Business Analyst' },
//   { id: 10, title: 'Quality Assurance Engineer' },
//   { id: 11, title: 'HR Manager' },
//   { id: 12, title: 'Content Writer' },
//   { id: 13, title: 'Cybersecurity Analyst' },
//   { id: 14, title: 'IT Support Specialist' },
//   { id: 15, title: 'Mobile App Developer' },
//   { id: 16, title: 'Cloud Architect' },
//   { id: 17, title: 'Project Manager' },
//   { id: 18, title: 'E-commerce Manager' },
//   { id: 19, title: 'Social Media Manager' },
//   { id: 20, title: 'AI/ML Engineer' },
// ];
