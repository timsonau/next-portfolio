import React, { useState } from "react";
import DropdownItem from "./DropdownItem";

export default function NavBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  const items = ["Profile", "Projects", "Experience", "Skills", "Contact"];
  return (
    <nav id="NavBar" className="">
      <div className="expanded-bar">
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
