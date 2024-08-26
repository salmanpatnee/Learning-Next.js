import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <div className="navbar  bg-base">
      <div className="flex-none">
        <a className="btn btn-ghost text-xl">Salman Abdul Ghani</a>
      </div>
      <div className="flex-1">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About Me</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
