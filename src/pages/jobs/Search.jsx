import { useRef } from "react";

function Search({ handleSearch }) {
  const titleRef = useRef();
  const locRef = useRef();

  const displayError = (item) => {
    item.parentElement.classList.add("input-error");
    item.nextElementSibling.classList.add("md:block");
  };
  const clearError = () => {
    [titleRef.current, locRef.current].forEach((item) => {
      item.parentElement.classList.remove("input-error");
      item.nextElementSibling.classList.remove("md:block");
    });
  };
  const searchValidate = () => {
    let valid = true;
    [titleRef.current, locRef.current].forEach((item) => {
      if (item.value.length === 0) {
        displayError(item);
        valid = false;
      }
    });
    return valid;
  };

  const onClick = () => {
    clearError();
    if (!searchValidate()) return;
    const query = titleRef.current.value + " in " + locRef.current.value;
    handleSearch(query);
  };

  return (
    <div
      className="border border-gray-200 rounded-none md:rounded-md md:flex h-full shadow-md md:shadow-sm mb-6 md:mb-0"
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick();
      }}
    >
      <div className="search-div border-b md:border-b-0 md:border-r">
        <i className="fa-solid fa-magnifying-glass search-i"></i>
        <input
          className="search-input"
          ref={titleRef}
          type="search"
          name="query"
          id="query"
          placeholder="Search job title or keyword"
        />
        <small className="text-red-500 hidden">This field is required!</small>
      </div>
      <div className="search-div">
        <i className="fa-solid fa-location-dot search-i"></i>
        <input
          className="search-input"
          ref={locRef}
          type="search"
          name="location"
          id="location"
          placeholder="Country or timezone"
        />
        <small className="text-red-500 hidden">This field is required!</small>
      </div>
      <button
        className="md:inline-block w-36 text-white bg-green-500 hover:bg-green-400 m-2 rounded-lg hidden"
        onClick={onClick}
      >
        Find jobs
      </button>
    </div>
  );
}

export default Search;
