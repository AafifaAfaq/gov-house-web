import React from "react";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="bg-[#044e83] sticky top-0 left-0 z-50 h-20 w-full px-4 flex justify-around items-center">
      {/* Logo */}
      <div className="flex-shrink-0 w-[70px] mt-8 sm:w-[80px] md:w-[90px]">
        <img src="/logo.png" alt="logo" className="w-full h-auto" />
      </div>
      {/* Subtitle */}
      <div className="flex items-center justify-center w-auto">
        <h1 className="text_shadow hidden text-[15px] text-[#b9d8f3] font-bold font-sans lg:block xl:text-xl 2xl:text-2xl hidden md:block">
          Tuition Free Education Program On Latest Technologies
        </h1>
        <h1 className="text_shadow text-[1rem] text-slate-300 font-sans font-bold md:hidden">
          Tuition Free Program
        </h1>
      </div>
      {/* Navigation Links */}
      <nav className="w-auto">
        <ul className="flex flex-row items-center gap-4 text-white">
          <li className="text-sm sm:text-base">
            <Link href="/">Home</Link>
          </li>
          <li className="text-sm sm:text-base">
            <Link href="/apply">Apply</Link>
          </li>
          <li className="text-sm sm:text-base">
            <Link href="/jobs">Jobs</Link>
          </li>
          <li className="text-sm sm:text-base">
            <Link href="/result">Result</Link>
          </li>
          <li className="text-sm sm:text-base hidden md:block">
            <Link href="/#courses">Courses</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
