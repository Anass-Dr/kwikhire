function Header() {
  return (
    <div className="py-6 px-4 md:py-10 md:px-10 bg-slate-100 bg-[url('/images/header-bg-sm.png')] md:bg-[url('/images/header-bg.png')] bg-cover">
      <h2 className="text-2xl md:text-4xl font-semibold mb-3">
        Find your dream job
      </h2>
      <p className="text-sm md:text-base text-gray-500">
        Looking for jobs? Browse our latest job openings to view & apply to the
        best jobs today!
      </p>
    </div>
  );
}

export default Header;
