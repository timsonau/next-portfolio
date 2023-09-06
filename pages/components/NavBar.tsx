import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const items = ["Profile", "Projects", "Experience", "Skills", "Contact"];
  return (
    <nav
      id="NavBar"
      className="bg-white z-10 fixed container flex justify-center px-4 py-8 mx-0 min-w-full"
    >
      <div className="expanded-bar hidden space-x-8 lg:flex font-semibold">
        {items.map((name, index) => (
          <a key={index} href={`#${name}`} className="text-gray-800">
            {name}
          </a>
        ))}
      </div>
      <div className="dropdown" onClick={toggleDropdown}>
        <div className="space-y-2">
          <span className="dropdown-line "></span>
          <span className="dropdown-line"></span>
          <span className="dropdown-line"></span>
        </div>
      </div>
      <div
        className={`dropdown-options ${
          showDropdown ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={toggleDropdown}
      >
        {items.map((name, index) => (
          <DropdownItem key={index} name={name} />
        ))}
      </div>
    </nav>
  );
}
