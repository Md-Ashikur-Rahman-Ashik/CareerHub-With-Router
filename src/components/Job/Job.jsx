import { MdOutlineLocationOn } from "react-icons/md";
import { MdCurrencyExchange } from "react-icons/md";
import { Link } from "react-router-dom";

const Job = ({ job }) => {
  const {
    logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    job_type,
    salary,
    id
  } = job;

  return (
    <div className="card card-compact bg-base-100 shadow-xl">
      <figure>
        <img src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="flex gap-4 text-[#7E90FE]">
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">
            {remote_or_onsite}
          </button>
          <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE]">
            {job_type}
          </button>
        </div>
        <div className="mt-4 flex gap-4">
          <h2 className="flex items-center gap-2">
            <MdOutlineLocationOn className="text-2xl" />
            {location}
          </h2>
          <h2 className="flex items-center gap-2">
            <MdCurrencyExchange className="text-2xl" />
            {salary}
          </h2>
        </div>
        <div className="card-actions">
          <Link to={`/job/${id}`}>
            <button className="btn btn-primary">View Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Job;
