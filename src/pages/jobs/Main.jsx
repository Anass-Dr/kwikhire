import Filters from "./Filters";
import Search from "./Search";
import JobList from "./JobList";

function Main({ handleSearch, dispatch, handleFilterSide }) {
  return (
    <div className="flex-grow md:grid md:grid-cols-12 md:grid-rows-8 gap-x-3 gap-y-5 px-4 md:px-10 py-5 h-calc">
      <div className="hidden md:block md:col-start-1 md:col-end-4 md:row-start-1 md:row-end-9">
        <Filters dispatch={dispatch} />
      </div>
      <div className="col-span-full md:col-start-4 md:col-end-13 md:row-start-1 md:row-end-2">
        <Search handleSearch={handleSearch} />
      </div>
      <div className="md:col-start-4 md:col-end-13 md:row-start-2 md:row-end-9 overflow-auto">
        <JobList handleFilterSide={handleFilterSide} dispatch={dispatch} />
      </div>
    </div>
  );
}

export default Main;
