import React from 'react';
import { FaComputerMouse } from "react-icons/fa6";
import { IoWatchOutline } from "react-icons/io5";
import { LiaTvSolid } from "react-icons/lia";
import { MdComputer, MdOutlinePhoneAndroid } from "react-icons/md";

const MobileList = () => {
  return (
    <ul className="p-3">
      <li>
        <a 
        className="flex gap-2 items-center p-3 hover:bg-blue-200 rounded-lg"
        href="#">
            <MdOutlinePhoneAndroid size={30} className="text-blue-400" />
            <span className="text-xl text-gray-500">Celulares</span>
        </a>
      </li>
      <li>
        <a 
        className="flex gap-2 items-center p-3 hover:bg-blue-200 rounded-lg"
        href="#">
            <MdComputer size={30} className="text-blue-400" />
            <span className="text-xl text-gray-500">Computadores</span>
        </a>
      </li>
      <li>
        <a 
        className="flex gap-2 items-center p-3 hover:bg-blue-200 rounded-lg"
        href="#">
            <FaComputerMouse size={30} className="text-blue-400"  />
            <span className="text-xl text-gray-500">Mouses</span>
        </a>
      </li>
      <li>
        <a 
        className="flex gap-2 items-center p-3 hover:bg-blue-200 rounded-lg"
        href="#">
            <LiaTvSolid size={30} className="text-blue-400" />
            <span className="text-xl text-gray-500">Televisões</span>
        </a>
      </li>
      <li>
        <a 
        className="flex gap-2 items-center p-3 hover:bg-blue-200 rounded-lg"
        href="#">
            <IoWatchOutline size={30} className="text-blue-400" />
            <span className="text-xl text-gray-500">Smartwatchs</span>
        </a>
      </li>
    </ul>
  )
}

export default MobileList;