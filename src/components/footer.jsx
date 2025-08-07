import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#2563eb] text-center text-white py-12  mt-14 border-t">
      <div className="container mx-auto px-6">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Christeen Fernando. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="https://linkedin.com/in/shenoli-christeen" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            LinkedIn
          </a>
          <a href="https://github.com/fwschristeen" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            GitHub
          </a>
          <a href="mailto:shenoli1120@gmail.com" className="hover:text-black">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
