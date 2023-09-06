import React from "react";

interface DropdownItemProps {
  name: string;
}
export default function DropdownItem(props: DropdownItemProps) {
  return (
    <li className="menu-item block px-4 py-2 text-center font-semibold">
      <a href={`#${props.name}`}>{props.name}</a>
    </li>
  );
}
