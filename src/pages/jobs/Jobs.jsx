import React from "react";
import Header from "./Header";
import Main from "./Main";

function Jobs({ handleSearch, dispatch, handleFilterSide }) {
  return (
    <div className="flex-grow bg-white flex flex-col">
      <Header />
      <Main
        handleSearch={handleSearch}
        dispatch={dispatch}
        handleFilterSide={handleFilterSide}
      />
    </div>
  );
}

export default Jobs;
