import React from 'react';
import { FaCartShopping } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const ProductCard = ({ data }) => {
  const { id, fotos, nome, preco, descricao, vendido, usuario_id } = data;
  //593cfb
  return (
    <NavLink
    className="w-full h-[380px] hover:shadow-lg bg-white rounded-lg p-2 flex flex-col duration-500 relative group" 
    to={`produto/${id}`}>
      <div className="absolute bg-white/40 p-2 rounded-lg top-6 left-5 z-30 group-hover:bg-[#593cfb]/80 
      duration-500">
        <span className="flex gap-3 items-center font-medium text-[#593cfb] group-hover:text-white duration-500">
          Promoção <FaCartShopping /> 
        </span>
      </div>
      <div className="overflow-hidden">
        <img
          className="w-full h-[250px] object-cover bg-cover bg-center rounded-t-lg hover:scale-110 duration-500" 
          src={fotos[0].src} 
          alt={fotos[0].titulo} 
          title={fotos[0].titulo} 
        />
      </div>
      <div className="p-2">
        <div>
          <h2 className="font-bold text-[#666] text-lg md:text-2xl">{nome}</h2>
        </div>
        <div>
          <p>De: <span className="line-through">R$ {preco}</span></p>
          <p>Por: 
            <span className="text-green-600 ml-2">
              R$
              <span className="text-2xl">{preco - Math.ceil((Math.random() * 10))}</span>
            </span>
          </p>
        </div>
      </div>
    </NavLink>
  )
}

export default ProductCard;