import React from "react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#2563eb] text-white py-20 px-12 ">
      <main className="flex-grow">
      <div className="text-center px-4 sm:px-8">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Christeen Fernando. All rights reserved.
        </p>
        <div className="mt-2 flex justify-center space-x-4">
          <a
            href="https://linkedin.com/in/shenoli-christeen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/fwschristeen"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition"
          >
            GitHub
          </a>
          <a
            href="mailto:shenoli1120@gmail.com"
            className="hover:text-black transition"
          >
            Email
          </a>
        </div>
      </div>
      </main>
    </footer>
  );
};

export default Footer;
