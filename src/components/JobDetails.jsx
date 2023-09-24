import { useLoaderData, useParams } from "react-router-dom";
import bgImg from "./../assets/images/bg1.png";
import bgImg2 from "./../assets/images/bg2.png";

const JobDetails = () => {
  const jobs = useLoaderData();
  const { jobId } = useParams();

  const job = jobs.find((job) => job.id === parseInt(jobId));

  const {
    id,
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    job_type,
    job_description,
    job_responsibility,
    educational_requirements,
    experiences,
  } = job;
  return (
    <>
      <h2 className="bg-sky-50 text-4xl font-bold text-center py-16">
        Job Details
      </h2>
      <div className="container mx-auto md:flex md:gap-8 mb-8 px-5 sm:px-12 lg:px-20 py-20">
        <div className="md:w-2/3 space-y-4">
          <h4 className="text-2xl font-bold">{job_title}</h4>
          <p>
            <span className="font-semibold text-lg">Job Description: </span>
            {job_description}
          </p>
          <p>
            <span className="font-semibold text-lg">Job Responsibility: </span>
            {job_responsibility}
          </p>
          <p>
            <span className="font-semibold text-lg">
              Educational Requirements:{" "}
            </span>
            {educational_requirements}
          </p>
          <p>
            <span className="font-semibold text-lg">Job description: </span>
            {job_description}
          </p>
        </div>
        <div className="md:w-1/3">
          <div className="bg-sky-50 rounded-lg p-5">
            <h2 className="text-2xl font-semibold py-16">Job Details</h2>
          </div>
          <button className="w-full btn btn-primary text-white md:text-lg mt-8">
            Apply Now
          </button>
        </div>
      </div>
    </>
  );
};

export default JobDetails;
