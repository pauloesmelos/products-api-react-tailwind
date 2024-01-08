import React from 'react';
import { useParams } from 'react-router-dom';
import useGetProduct from '../../hooks/getProduct/useGetProduct';
import Loading from '../loading/Loading';
import Carrinho from './carrinho/Carrinho';

const SpecifyProduct = () => { // produto específico
  const { id } = useParams();
  const { data, isLoading} = useGetProduct(id);

  if(isLoading) return <Loading />
  return (
    <section className="w-full max-w-[1000px] mx-auto bg-white rounded-md shadow-md">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 p-5">
        <div>
          <h1>
            <img 
              className="rounded-lg"
              src={data.fotos[0].src} 
              alt={`${data.nome}`} 
              title={`${data.nome}`} 
            />
          </h1>
        </div>
        <div className="flex flex-col mx-auto md:mx-0">
          <div>
            <span className="text-[.7rem] sm:text-sm text-gray-600">Novo | + 1000 vendidos</span>
          </div>
          <div>
            <h1 className="font-bold text-sm sm:text-xl">{data.nome}</h1>
            <p className="text-lg sm:text-xl md:text-3xl py-8 text-red-700">R$ {data.preco}</p>
            <h3>{data.descricao}</h3>
          </div>
          <div>
            <Carrinho />
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecifyProduct;