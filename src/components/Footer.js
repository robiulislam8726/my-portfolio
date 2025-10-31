import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-auto">
      <div className="container text-center">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved Md Robiul Islam.
      </div>
    </footer>
  );
};

export default Footer;
