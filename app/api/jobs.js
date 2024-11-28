let jobs = [];

export default function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json(jobs);
  } else if (req.method === "POST") {
    const job = req.body;
    jobs.push(job);
    res.status(201).json(job);
  } else if (req.method === "DELETE") {
    const { id } = req.query;
    jobs = jobs.filter((job) => job.id !== parseInt(id));
    res.status(204).end();
  }
}
