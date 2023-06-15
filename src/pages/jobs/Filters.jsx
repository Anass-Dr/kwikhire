function Filters({ dispatch, handleFilterSide }) {
  const handleJobType = (e) =>
    dispatch({
      type: e.target.checked ? "addType" : "removeType",
      payload: e.target.dataset["value"],
    });
  const handleJobRequirements = (e) =>
    dispatch({
      type: e.target.checked ? "addRequirement" : "removeRequirement",
      payload: e.target.dataset["value"],
    });

  return (
    <div className="border-2 border-gray-200 h-full rounded-md">
      <div className="flex justify-between items-center px-4 py-3 border-b border-gray-200">
        <i
          className="fa-solid fa-xmark text-lg md:hidden"
          onClick={handleFilterSide}
        ></i>
        <span className="text-sm font-bold">Filter</span>
        <button
          className="text-sm text-red-400 font-medium"
          onClick={() => dispatch({ type: "clear" })}
        >
          Clear all
        </button>
      </div>
      <ul className="px-4">
        <li className="filter-list">
          <span className="filter-list__head">Date Post</span>
          <select
            className="block  w-full border border-gray-300 py-2 px-2 text-sm text-gray-500 rounded-md"
            id="date-select"
            onChange={(e) =>
              dispatch({ type: "changeDate", payload: e.target.value })
            }
          >
            <option value="all">Anytime</option>
            <option value="today">Today</option>
            <option value="3days">3 Days</option>
            <option value="week">Week</option>
            <option value="month">Month</option>
          </select>
        </li>
        <li className="filter-list">
          <span className="filter-list__head">Job type</span>
          <div className="filter-list--form-control">
            <div>
              <input
                type="checkbox"
                name="fullTime"
                id="fullTime"
                data-value="FULLTIME"
                onChange={handleJobType}
              />
              <label htmlFor="fullTime">Full-time</label>
            </div>
            <div>
              <input
                type="checkbox"
                id="contractor"
                name="contractor"
                data-value="CONTRACTOR"
                onChange={handleJobType}
              />
              <label htmlFor="contractor">Contractor</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="partTime"
                id="partTime"
                data-value="PARTTIME"
                onChange={handleJobType}
              />
              <label htmlFor="partTime">Part-time</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="intern"
                id="intern"
                data-value="INTERN"
                onChange={handleJobType}
              />
              <label htmlFor="intern">Internship</label>
            </div>
          </div>
        </li>
        <li className="filter-list">
          <span className="filter-list__head">Remote job only</span>
          <select
            className="block  w-full border border-gray-300 py-2 px-2 text-sm text-gray-500 rounded-md"
            id="remote-select"
            onChange={(e) =>
              dispatch({ type: "changeRemote", payload: e.target.value })
            }
            data-name="remote"
          >
            <option data-name="remote" value="false">
              False
            </option>
            <option data-name="remote" value="true">
              True
            </option>
          </select>
        </li>
        <li className="filter-list">
          <span className="filter-list__head">Job requirement</span>
          <div className="filter-list--form-control">
            <div>
              <input
                type="checkbox"
                name="more3"
                id="more3"
                data-value="more_than_3_years_experience"
                onChange={handleJobRequirements}
              />
              <label htmlFor="more3">&gt; 3 years</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="under3"
                id="under3"
                data-value="under_3_years_experience"
                onChange={handleJobRequirements}
              />
              <label htmlFor="under3">&lt; 3 years</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="noExp"
                id="noExp"
                data-value="no_experience"
                onChange={handleJobRequirements}
              />
              <label htmlFor="noExp">No Experience</label>
            </div>
            <div>
              <input
                type="checkbox"
                name="noDegree"
                id="noDegree"
                data-value="no_degree"
                onChange={handleJobRequirements}
              />
              <label htmlFor="noDegree">No degree</label>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Filters;
