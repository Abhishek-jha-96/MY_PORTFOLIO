import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <span><Image
        src='/_93805742-fde0-4607-85e0-93d5fa7c678c-removebg-preview.png'
        width={70}
        height={70}
        alt="sdf"
        /></span>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
