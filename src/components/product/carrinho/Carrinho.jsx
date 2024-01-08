import React from 'react';
import { GlobalCarrinho } from '../../hooks/global/globalCarrinho';

const Carrinho = () => {
  const { unidade, add, less } = React.useContext(GlobalCarrinho);

  return (
    <div className="pt-24">
        <div className="flex gap-5 items-center">
            <button 
            onClick={less}
            className="p-2 bg-white text-black font-bold border-2 hover:bg-slate-200 duration-300">
                -
            </button>
            <span>
              {unidade}
            </span>
            <button 
            onClick={add} 
            className="p-2 bg-white text-black font-bold border-2 hover:bg-slate-200 duration-300">
                +
            </button>
            <button 
            className="p-2 w-[100px] bg-blue-600 text-white rounded-md hover:bg-blue-400 duration-300">
                Comprar
            </button>
        </div>
    </div>
  )
}

export default Carrinho;