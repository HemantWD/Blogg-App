import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const handleClick = () => {
    console.log("Clicked");
  };

  return (
    <nav className="bg-blue-500 p-4 relative">
      <div className="relative z-10 flex justify-between items-center">
        <div className="text-white text-xl font-semibold">Blogger</div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="text-white hover:text-gray-200 font-bold">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-white hover:text-gray-200 font-bold">
              Blogs
            </Link>
          </li>
          <li>
            <Link
              to="/create"
              className="text-white hover:text-gray-200 font-bold"
            >
              Write Blogs
            </Link>
          </li>
        </ul>

        <div className="space-x-2">
          <button
            onClick={handleClick}
            className="bg-transparent text-white hover:text-gray-200 py-2 px-3 rounded-full border
             border-white hover:bg-white hover:border-transparent transition duration-300"
          >
            <Link to="/login">Login</Link>
          </button>

          <button className="bg-white text-blue-500 hover:bg-blue-500 hover:text-white py-2 px-3 rounded-full border border-blue-500 hover:border-transparent transition duration-300">
            <Link to="/register">Register</Link>
          </button>
        </div>
      </div>
    </nav>
  );
};
