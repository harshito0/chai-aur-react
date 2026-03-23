import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="shadow sticky top-0 z-50 bg-white">
      <nav className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
            className="h-10"
            alt="logo"
          />
        </Link>

        {/* MOBILE MENU BUTTON */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl"
        >
          ☰
        </button>

        {/* NAV LINKS */}
        <ul
          className={`lg:flex lg:items-center lg:gap-8 absolute lg:static bg-white left-0 w-full lg:w-auto transition-all duration-300 ${
            menuOpen ? "top-16" : "top-[-400px]"
          }`}
        >
          <li>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `block px-6 py-3 ${
                  isActive ? "text-orange-600" : "text-gray-700"
                } hover:text-orange-600`
              }
            >
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block px-6 py-3 ${
                  isActive ? "text-orange-600" : "text-gray-700"
                } hover:text-orange-600`
              }
            >
              About
            </NavLink>
          </li>

          {/* BUTTONS */}
          <li className="lg:ml-6">
            <Link
              to="/login"
              className="block px-6 py-2 text-gray-700 hover:text-orange-600"
            >
              Login
            </Link>
          </li>

          <li>
            <Link
              to="/signup"
              className="block mx-6 lg:mx-0 my-3 lg:my-0 bg-orange-600 text-white px-5 py-2 rounded-lg hover:bg-orange-700"
            >
              Get Started
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
