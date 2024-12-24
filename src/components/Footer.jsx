import React from "react";

const Footer = () => {

  const date = new Date().getFullYear();

  return (

  <footer className="py-4 bg-navy text-center text-white">
    <p>&copy; {date} Md Istiaq Ahmed. All rights reserved.</p>
  </footer>
);
};

export default Footer;
