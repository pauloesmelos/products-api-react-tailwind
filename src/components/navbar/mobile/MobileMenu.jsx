import React from 'react';
import { IoMdClose } from "react-icons/io";
import MobileList from './list/MobileList';

const MobileMenu = ({ mobile, setMobile }) => {
  return (
    <nav>
      <div>
        {/* mask shadow */}
        { mobile ?
            <div className="fixed top-0 left-0 w-full h-screen bg-black/40 z-50"></div> 
            :
            <></>
        }
        <div className={mobile ? "w-[300px] bg-white h-screen fixed top-0 left-0 z-50 duration-300" : `h-screen fixed top-0 left-0 z-50
        ml-[-100%] duration-300`}>
            <div className="flex items-center justify-between p-4">
                <h1 className="text-2xl font-bold">Shopping <span className="text-blue-500">Web</span></h1>
                <IoMdClose 
                className="cursor-pointer hover:text-blue-500 duration-300"
                size={35}
                onClick={() => setMobile(false)}
                />
            </div>
            <div>
                {/* mobile list */}
                <MobileList />
            </div>
        </div>
      </div>
    </nav>
  )
}

export default MobileMenu;