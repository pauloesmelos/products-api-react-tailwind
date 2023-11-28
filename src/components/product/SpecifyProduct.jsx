import React from 'react';
import { useParams } from 'react-router-dom';
import useGetProduct from '../../hooks/getProduct/useGetProduct';
import Loading from '../loading/Loading';

const SpecifyProduct = () => { // produto específico
  const { id } = useParams();
  const { data, isLoading} = useGetProduct(id);

  if(isLoading) return <Loading />
  return (
    <section className="">
      <div className="grid grid-cols-2 gap-5">
        <div>
          <h1>
            <img src={data.fotos[0].src} alt={`${data.nome}`} title={`${data.nome}`} />
          </h1>
        </div>
        <div className="flex flex-col">
          <div>
            <span className="text-[.7rem] sm:text-sm text-gray-600">Novo | + 1000 vendidos</span>
          </div>
          <div>
            <h1 className="font-bold text-sm sm:text-xl">{data.descricao}</h1>
            <p>R$ {data.preco}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpecifyProduct;