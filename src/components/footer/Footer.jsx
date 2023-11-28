import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="mt-10 p-3 w-full bg-white text-center hidden sm:flex flex-col mx-auto">
      <div>
        <p className="text-indigo-600 font-bold text-sm">&copy; 2023 - Maked with React and Taiwind - Shopping Web</p>
      </div>
      <div className="text-4xl text-[#593cfb] flex justify-center gap-6 mt-5">
        <TiSocialTwitter />
        <TiSocialYoutube />
        <TiSocialLinkedin />
        <SlSocialInstagram />
      </div>
    </footer>
  )
}

export default Footer;