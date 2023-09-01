import React from "react";

interface NavItemProps {
  name: string;
}
export default function NavItem(props: NavItemProps) {
  return (
    <li className="menu-item block px-4 py-2 font-semibold">
      <a href={`#${props.name}`}>{props.name}</a>
    </li>
  );
}
