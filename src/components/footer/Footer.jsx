import React from 'react';
import { SlSocialInstagram } from "react-icons/sl";
import { TiSocialLinkedin, TiSocialTwitter, TiSocialYoutube } from "react-icons/ti";

const Footer = () => {
  return (
    <footer className="w-full p-3 bg-white grid grid-cols-1 md:grid-cols-3  mx-auto mt-24 font-sans py-10 gap-5">
      {/* copright and texts left */}
      <div className="p-5">
        <div>
          <h1 className="text-blue-700 font-bold text-4xl">Shopping Web</h1>
        </div>
        <div className="text-lg text-slate-600 py-5">
          <p className="font-bold my-2">
            &copy; 2023 - Maked with React and Taiwind
          </p>
          <p className="text-xl hidden lg:block">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est ratione asperiores animi consectetur, sunt voluptatem facere tene.</p>
        </div>
        <div className="flex gap-16 text-slate-800">
          <TiSocialTwitter className="cursor-pointer hover:text-indigo-800 hover:scale-110 duration-300 text-4xl" />
          <TiSocialYoutube className="cursor-pointer hover:text-indigo-800 hover:scale-110 duration-300 text-4xl" />
          <TiSocialLinkedin className="cursor-pointer hover:text-indigo-800 hover:scale-110 duration-300 text-4xl" />
          <SlSocialInstagram className="cursor-pointer hover:text-indigo-800 hover:scale-110 duration-300 text-4xl" />
        </div>
      </div>
      {/* lists */}
      <div className="md:col-span-2 p-5 flex flex-col sm:flex-row gap-5 justify-between mt-2">
        <div>
          <h3 className="font-bold text-xl text-slate-600">Institucional</h3>
          <ul className="mt-6">
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Home</li>
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Sobre</li>
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Ajuda</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl text-slate-600">Trabalhe Conosco</h3>
          <ul className="mt-6">
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Processo</li>
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Estágio</li>
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Avaliações</li>
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Colaboradores</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl text-slate-600">Unidades</h3>
          <ul className="mt-6">
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Alfenas</li>
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Campinas</li>
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Belo Horizonte</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-xl text-slate-600">Legal</h3>
          <ul className="mt-6">
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Regras</li>
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Termos</li>
            <li className="py-2 text-gray-500 cursor-pointer hover:text-indigo-500 duration-200">Jurídico</li>
          </ul>
        </div>  
      </div>
    </footer>
  )
}

export default Footer;