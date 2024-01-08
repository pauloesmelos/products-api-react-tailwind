import React from 'react';
import { IoCart, IoMenu, IoSearch } from "react-icons/io5";
import { NavLink } from 'react-router-dom';
import MobileMenu from './mobile/MobileMenu';

const Navbar = () => {
  const [mobile, setMobile] = React.useState(false);
  const handleMobile = () => {
    setMobile(e => !e);
  }
  return (
    <header className="bg-white p-3 mb-10 shadow-lg font-sans w-full">
      <div className="flex justify-between gap-5 items-center">
        {/* left logo and mobile icon */}
        <div className="flex items-center gap-6 p-3">
          <IoMenu 
            onClick={handleMobile}
            className="hover:text-blue-500 duration-200 text-xl sm:text-3xl md:text-4xl"
            cursor={"pointer"} 
          />
          <NavLink to="/">
            <div className="hidden sm:block">
              <h1 className="text-lg md:text-4xl">
                Shopping 
                <span className="font-bold text-blue-500 ml-2">Web</span>
              </h1>
            </div>
            <div className="sm:hidden">
              <h1 className="text-sm font-bold text-blue-500">
                Shopping
              </h1>
            </div>
          </NavLink>
        </div>
        {/* search product */}
        <div className="bg-gray-200 rounded-xl flex items-center p-1 sm:p-2 w-full max-w-[300px] md:max-w-[500px] border-2 hover:border-blue-500">
          <IoSearch 
            className="hover:text-blue-700 duration-200 cursor-pointer"
            size={30} 
          />
          <input
            className="bg-transparent outline-none text-black placeholder:text-black px-3 w-full text-sm
            md:text-xl"
            type="text"
            placeholder="Pesquise um produto" 
          />
        </div>
        {/* icon cart */}
        <div className="hidden md:block">
          <button className="flex items-center gap-2 p-2 border-2 border-blue-500 rounded-xl text-blue-500 cursor-pointer
          hover:text-white hover:bg-blue-600 duration-300">
            <IoCart size={30} />
            <span className="font-bold text-xl">Carrinho</span>
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <MobileMenu mobile={mobile} setMobile={setMobile} />
    </header>
  )
}

export default Navbar;