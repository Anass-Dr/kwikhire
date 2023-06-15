import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="flex justify-center items-center px-4 md:px-10 py-3 bg-slate-100 border-b-2 border-gray-200">
      <Link to="/">
        <img
          className="w-24 md:w-28"
          src="/images/kwikehire-logo.svg"
          alt="logo"
        />
      </Link>
    </nav>
  );
};

export default Navbar;
