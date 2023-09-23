import { useEffect } from "react";
import { useState } from "react";
import Job from "./Job";

const FeaturedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const [showAllJobs, setShowAllJobs] = useState(false);

  useEffect(() => {
    fetch("jobs.json")
      .then((res) => res.json())
      .then((data) => {
        showAllJobs ? setJobs(data) : setJobs(data.slice(0, 4));
      });
  }, [showAllJobs]);
  return (
    <div className="text-center my-20">
      <h2 className="text-4xl font-extrabold">Featured Jobs</h2>
      <p className="mt-3">
        Explore thousands of job opportunities with all the information you
        need. Its your future
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 text-left">
        {jobs.map((job) => (
          <Job key={job.id} job={job} />
        ))}
      </div>
      {!showAllJobs && (
        <button
          onClick={() => setShowAllJobs(true)}
          className="btn btn-primary text-white md:text-lg mt-8"
        >
          Show All
        </button>
      )}
      {showAllJobs && (
        <button
          onClick={() => setShowAllJobs(false)}
          className="btn btn-primary text-white md:text-lg mt-8"
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default FeaturedJobs;
