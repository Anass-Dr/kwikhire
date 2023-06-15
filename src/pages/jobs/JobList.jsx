import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { jsearchContext } from "../../context/JSearchContextProvider";

const Job = ({ jobInfo }) => {
  const navigate = useNavigate();
  const {
    job_title: title,
    employer_name: company,
    job_city: city,
    job_country: country,
    job_employment_type: type,
    job_description: desc,
    job_posted_at_datetime_utc: date,
    job_is_remote: remote,
  } = jobInfo;
  const scripts = desc.split(".");

  const getDate = (d) => {
    let duration = Math.floor(
      (new Date() - new Date(d)) / (24 * 60 * 60 * 1000)
    );
    if (duration === 0) return "Today";
    else if (duration <= 30) return `Posted ${duration} days ago`;
    else return "Posted 30+ days ago";
  };

  return (
    <div
      className="border border-gray-200 rounded-lg p-5 mb-4 hover:shadow-md hover:-translate-y-1 transition cursor-pointer shadow-md md:shadow-none"
      onClick={() => navigate(`/jobs/${title}`)}
    >
      <div className="flex flex-col md:flex-row justify-between md:mb-5">
        <div>
          <h3 className="text-md md:text-xl font-bold mb-1">{title}</h3>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-center text-gray-400">
            <span className="text-sm md:text-base">{company}</span>
            <ul className="md:list-disc flex gap-4 md:gap-8">
              <li className="py-1 px-2 text-orange-500 bg-orange-100 rounded-xl md:text-sm lowercase md:uppercase">
                {type}
              </li>
              {remote && (
                <li className="py-1 px-2 text-blue-500 bg-blue-100 rounded-xl text-sm">
                  Remote
                </li>
              )}
            </ul>
          </div>
        </div>
        <div className="md:text-end mt-3 md:mt-0">
          <div className="mb-1 text-sm md:text-base">
            <i className="fa-solid fa-location-dot mr-3"></i>
            <span className="font-medium">
              {city ? `${city}, ` : ""}
              {country}
            </span>
          </div>
          <span className="text-gray-400 text-sm">{getDate(date)}</span>
        </div>
      </div>
      <ul className="pl-4 text-gray-500 font-medium hidden md:block">
        <li className="job-list">
          <p>{scripts[0]}</p>
        </li>
        <li className="job-list">
          <p>{scripts[1]}</p>
        </li>
      </ul>
    </div>
  );
};

const JobFilter = ({ handleFilterSide, dispatch }) => {
  return (
    <ul
      id="job-filter"
      className="flex gap-2 overflow-auto mb-4 text-sm md:hidden"
    >
      <li className="filter-sm-list" onClick={handleFilterSide}>
        <i className="fa-solid fa-sliders px-2"></i>
      </li>
      <li className="filter-sm-list">
        <select
          className="pr-1"
          name="date"
          id="date"
          onChange={(e) =>
            dispatch({ type: "changeDate", payload: e.target.value })
          }
        >
          <option value="">Date Posted</option>
          <option value="all">Anytime</option>
          <option value="today">Today</option>
          <option value="3days">3 Days</option>
          <option value="week">Week</option>
          <option value="month">Month</option>
        </select>
      </li>
      <li className="filter-sm-list">
        <select
          name="remote"
          id="remote"
          onChange={(e) =>
            dispatch({ type: "changeRemote", payload: e.target.value })
          }
        >
          <option value="">Remote only</option>
          <option value="false">False</option>
          <option value="true">True</option>
        </select>
      </li>
    </ul>
  );
};

function JobList({ handleFilterSide, dispatch }) {
  const searchResults = useContext(jsearchContext);

  return (
    <div>
      <JobFilter handleFilterSide={handleFilterSide} dispatch={dispatch} />
      {searchResults.length > 0 &&
        searchResults.map((obj, idx) => <Job key={idx} jobInfo={obj} />)}
    </div>
  );
}

export default JobList;
