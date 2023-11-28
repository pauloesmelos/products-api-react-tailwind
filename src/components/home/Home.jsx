import React from 'react';
import useGetProducts from '../../hooks/getProducts/useGetProducts';
import Loading from '../loading/Loading';
import ProductCard from '../product/ProductCard';

const Home = () => {
  const { products, loading } = useGetProducts();
  if(loading) return <Loading />
  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-16 p-5">
      {products.map((product, index) => (
        <ProductCard data={product} key={index} />
      ))}
    </main>
  )
}

export default Home;