import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-black py-8 px-4">
      {/* Top Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-8 space-y-8 md:space-y-0">
        {/* Left Section */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start md:items-center">
          <img src="/Assets/image copy 3.png" alt="Logo" className="w-[296px] h-[221px] bg-white rounded-full" />
          <div className="flex flex-col space-y-3">
            <p className="text-lg font-semibold">
              Get involved in improving tech in Africa
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
              Support Us
            </button>
          </div>
        </div>

        {/* Center Section */}
        <div className="flex flex-wrap justify-between gap-10">
          {/* Links Section */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold text-lg">Links</p>
            <p className="hover:text-blue-400 cursor-pointer">Home</p>
            <p className="hover:text-blue-400 cursor-pointer">Success Stories</p>
            <p className="hover:text-blue-400 cursor-pointer">About Us</p>
            <p className="hover:text-blue-400 cursor-pointer">Get Involved</p>
          </div>

          {/* Teams Section */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold text-lg">Teams</p>
            <p className="hover:text-blue-400 cursor-pointer">Board Members</p>
            <p className="hover:text-blue-400 cursor-pointer">Advisors/Mentors</p>
            <p className="hover:text-blue-400 cursor-pointer">Executives</p>
            <p className="hover:text-blue-400 cursor-pointer">Staffs</p>
          </div>

          {/* Blogs Section */}
          <div className="flex flex-col space-y-2">
            <p className="font-bold text-lg">Blogs</p>
            <p className="hover:text-blue-400 cursor-pointer">Recent Blogs</p>
            <p className="hover:text-blue-400 cursor-pointer">New Blogs</p>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© {new Date().getFullYear()} Africa to Silicon Valley, Inc. All rights reserved.</p>
        <div>
          <h1 className="font-semibold text-white">Contact Us</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
