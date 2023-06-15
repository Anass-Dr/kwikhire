import { useContext } from "react";
import { useParams } from "react-router-dom";
import { jsearchContext } from "../../context/JSearchContextProvider";

function Job() {
  const { name } = useParams();
  const results = useContext(jsearchContext);
  const {
    job_title: title,
    employer_name: company,
    job_city: city,
    job_country: country,
    job_employment_type: type,
    job_description: desc,
    job_posted_at_datetime_utc: date,
    job_is_remote: remote,
    job_apply_link: link,
    employer_website: website,
  } = results.find((item) => item.job_title === name);

  return (
    <div className="max-w-7xl flex-1 px-4 md:px-10 py-4 md:py-10 bg-white">
      <div>
        <h1 className="text-3xl font-semibold mb-4">{title}</h1>
        <span className="block text-lg mb-4">{company}</span>
        <a
          className="py-2 px-4 bg-green-500 text-white"
          href={link}
          target="_blank"
        >
          Apply Now
        </a>
        <hr className="my-7" />
        <p className="text-sm md:text-base leading-6 text-gray-600">{desc}</p>
        <hr className="my-7" />
        <ul className="list-disc pl-4 text-sm flex flex-col gap-3">
          <li>
            <span className="job-details--span">Company Name:</span>
            <span>{company}</span>
          </li>
          {website && (
            <li>
              <span className="job-details--span">Company Website:</span>
              <span>{website}</span>
            </li>
          )}
          {city && (
            <li>
              <span className="job-details--span">City:</span>
              <span>{city}</span>
            </li>
          )}
          <li>
            <span className="job-details--span">Country:</span>
            <span>{country}</span>
          </li>
          <li>
            <span className="job-details--span">Job Type:</span>
            <span>{type}</span>
          </li>
          <li>
            <span className="job-details--span">Job Remote:</span>
            <span>{remote ? "Yes" : "No"}</span>
          </li>
          <li>
            <span className="job-details--span">Date Posted:</span>
            <span>{new Date(date).toLocaleString("fr-MA")}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Job;
