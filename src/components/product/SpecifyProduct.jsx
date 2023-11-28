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
      <h1>{data.nome}</h1>
    </section>
  )
}

export default SpecifyProduct;