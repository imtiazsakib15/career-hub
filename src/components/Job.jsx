import { useNavigate } from "react-router-dom";

const Job = ({ job }) => {
  const { id, logo, job_title, company_name, remote_or_onsite, job_type } = job;
  const navigate = useNavigate();

  const handleViewDetails = () => {
    const jobTitleLink = job_title.toLowerCase().split(" ").join("-");

    navigate(`/${jobTitleLink}/${id}`);
  };

  return (
    <div className="border-2 p-5">
      <img className="w-20 h-20" src={logo} alt={company_name} />
      <h4 className="text-2xl font-bold">{job_title}</h4>
      <p>{company_name}</p>
      <div className="mt-8">
        <span className="p-2 border border-blue-700 mr-2">
          {remote_or_onsite}
        </span>
        <span className="p-2 border border-blue-700">{job_type}</span>
      </div>
      <button
        onClick={handleViewDetails}
        className="btn btn-primary text-white md:text-lg mt-8"
      >
        View Details
      </button>
    </div>
  );
};

export default Job;
