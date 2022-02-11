import React from "react";

export default function NavItem({ href, children }) {
  return (
    <li>
      <a
        className="text-white text-lg text-opacity-6 font-semibold hover:text-yellow-500"
        href={href}
      >
        {children}
      </a>
    </li>
  );
}
