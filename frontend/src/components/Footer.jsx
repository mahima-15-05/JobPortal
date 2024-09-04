import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-blue-200 text-white py-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo or Brand Name */}
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Career Portal</h2>
        </div>
        {/* Links Section */}
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400">Home</a>
          <a href="#" className="hover:text-gray-400">About</a>
          <a href="#" className="hover:text-gray-400">Services</a>
          <a href="#" className="hover:text-gray-400">Contact</a>
        </div>
        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" className="hover:text-gray-400">Facebook</a>
          <a href="#" className="hover:text-gray-400">Twitter</a>
          <a href="#" className="hover:text-gray-400">LinkedIn</a>
        </div>
      </div>
      {/* Footer Bottom Text */}
      <div className="text-center mt-8">
        <p className="text-sm ">
          © {new Date().getFullYear()} Career Portal. By Maahi Tripathi. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
