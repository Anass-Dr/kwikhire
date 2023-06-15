import { useState, useReducer } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Jobs from "./pages/jobs/Jobs";
import SideFilter from "./pages/jobs/SideFilter";
import JSearchContextProvider from "./context/JSearchContextProvider";
import Job from "./pages/job/Job";
import "./App.css";

const filterReducer = (state, action) => {
  switch (action.type) {
    case "changeDate":
      return { ...state, date_posted: action.payload };
    case "changeRemote":
      return { ...state, remote_jobs_only: action.payload };
    case "addType":
      return {
        ...state,
        employment_types: [...state.employment_types, action.payload],
      };
    case "removeType":
      return {
        ...state,
        employment_types: [
          ...state.employment_types.filter((item) => item !== action.payload),
        ],
      };
    case "addRequirement":
      return {
        ...state,
        job_requirements: [...state.job_requirements, action.payload],
      };
    case "removeRequirement":
      return {
        ...state,
        job_requirements: [
          ...state.job_requirements.filter((item) => item !== action.payload),
        ],
      };
    case "clear":
      return {
        date_posted: "all",
        remote_jobs_only: "false",
        employment_types: [],
        job_requirements: [],
      };
    default:
      return state;
  }
};

function App() {
  const [query, setQuery] = useState("");
  const [isFilterOpen, setFilterSide] = useState(false);
  const [filter, dispatch] = useReducer(filterReducer, {
    date_posted: "all",
    remote_jobs_only: "false",
    employment_types: [],
    job_requirements: [],
  });

  const handleSearch = (q) => setQuery(q);
  const handleFilterSide = () => setFilterSide((value) => !value);

  return (
    <div className="bg-neutral-200">
      <div className="max-w-7xl h-full mx-auto flex flex-col">
        <Navbar />
        <JSearchContextProvider query={query} filter={filter}>
          <Routes>
            <Route
              path="/kwikhire"
              exact
              element={
                <Jobs
                  handleSearch={handleSearch}
                  dispatch={dispatch}
                  handleFilterSide={handleFilterSide}
                />
              }
            />
            <Route path="/kwikhire/jobs/:name" element={<Job />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </JSearchContextProvider>
        {isFilterOpen && <SideFilter handleFilterSide={handleFilterSide} />}
      </div>
    </div>
  );
}

export default App;
