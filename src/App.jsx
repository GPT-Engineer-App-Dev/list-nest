import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import PostJob from "./pages/PostJob.jsx";

import { useState } from "react";

function App() {
  const [jobs, setJobs] = useState([
    { jobTitle: "Software Engineer", companyName: "Tech Corp", location: "New York, NY", jobDescription: "Brief description of the job listing goes here...", contactEmail: "hr@techcorp.com" },
    { jobTitle: "Product Manager", companyName: "Innovate Ltd", location: "San Francisco, CA", jobDescription: "Brief description of the job listing goes here...", contactEmail: "jobs@innovatelt.com" }
  ]);

  const addJob = (job) => {
    setJobs([...jobs, job]);
  };
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index jobs={jobs} />} />
        <Route path="/post-job" element={<PostJob addJob={addJob} />} />
      </Routes>
    </Router>
  );
}

export default App;
