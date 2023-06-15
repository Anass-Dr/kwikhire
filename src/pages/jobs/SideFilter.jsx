import Filters from "./Filters";

function SideFilter({ handleFilterSide }) {
  return (
    <div className="absolute w-full h-full bg-white">
      <Filters handleFilterSide={handleFilterSide} />
    </div>
  );
}

export default SideFilter;
