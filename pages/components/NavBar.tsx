import React, { useState } from "react";
import NavItem from "./NavItem";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const items = ["Profile", "Projects", "Experience", "Skills", "Contact"];
  return (
    <nav className="bg-white z-10 fixed container flex justify-center px-4 py-8 mx-0 min-w-full">
      <div
        className="hidden space-x-8 lg:flex font-semibold"
        onClick={toggleDropdown}
      >
        {items.map((name, index) => (
          <a key={index} href={`#${name}`} className="text-gray-800">
            {name}
          </a>
        ))}
      </div>
      <div className="flex lg:hidden cursor-pointer" onClick={toggleDropdown}>
        <div className="space-y-2">
          <span className="block w-8 h-0.5 bg-gray-600 animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-600  animate-pulse"></span>
          <span className="block w-8 h-0.5 bg-gray-600  animate-pulse"></span>
        </div>
      </div>
      <div
        className={`bg-white border w-full border-gray-300 absolute mt-12 py-2 z-10 lg:hidden transition-opacity duration-300 ${
          showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleDropdown}
      >
        {items.map((name, index) => (
          <NavItem key={index} name={name} />
        ))}
      </div>
    </nav>
  );
}
