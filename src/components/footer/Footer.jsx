import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="p-3 w-full bg-white text-center hidden sm:flex flex-col mx-auto mt-36">
      <div>
        <p className="text-indigo-600 font-bold text-sm">&copy; 2023 - Maked with React and Taiwind - Shopping Web</p>
      </div>
      <div className="text-4xl text-[#593cfb] flex justify-center gap-6 mt-5">
        <TiSocialTwitter className="cursor-pointer hover:text-indigo-800 hover:scale-105 duration-300" />
        <TiSocialYoutube className="cursor-pointer hover:text-indigo-800 hover:scale-105 duration-300" />
        <TiSocialLinkedin className="cursor-pointer hover:text-indigo-800 hover:scale-105 duration-300" />
        <SlSocialInstagram className="cursor-pointer hover:text-indigo-800 hover:scale-105 duration-300" />
      </div>
    </footer>
  )
}

export default Footer;