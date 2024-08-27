import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center">
        <img src='/Assets/image.png' alt="Logo" width={50} height={50} />
        <span className="ml-2 text-xl font-bold text-gray-800">BrandName</span>
      </div>

      {/* Navigation Links */}
      <div className="flex items-center gap-6">
        <Link href="/" className="text-gray-600 hover:text-blue-500 transition duration-300">
          Home
        </Link>
        <Link href="/" className="text-gray-600 hover:text-blue-500 transition duration-300">
          Teams
        </Link>
        <Link href="/" className="text-gray-600 hover:text-blue-500 transition duration-300">
          Success Stories
        </Link>
        <Link href="/" className="text-gray-600 hover:text-blue-500 transition duration-300">
          About Us
        </Link>
        <Link href="/" className="text-gray-600 hover:text-blue-500 transition duration-300">
          Blogs
        </Link>
        <Link href="/" className="text-gray-600 hover:text-blue-500 transition duration-300">
          Get Involved
        </Link>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4">
        <Link href="/Login" className="text-gray-600 hover:text-blue-500 transition duration-300">
          Login
        </Link>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Donate
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
