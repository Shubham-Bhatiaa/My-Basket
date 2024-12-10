import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="container mx-auto p-4 flex flex-col gap-2 items-center lg:flex-row lg:justify-between">
        <p>All Rights Reserved 2024 © </p>
        <div className="flex items-center space-x-4 text-xl">
          <a href="" className="hover:text-primary-100">
            <FaFacebook />
          </a>
          <a href="" className="hover:text-primary-100">
            <FaInstagram />
          </a>
          <a href="" className="hover:text-primary-100">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer