import axios from 'axios';
import { useQuery } from 'react-query';
import API from '../../api/API';
const getProducts = async () => {
    return axios.get(`${API}`)
    .then(response => response.data)
    .catch(erro => console.log(erro));
}
// não repetir a mesma key !
const useGetProducts = () => {
  const { data: products, isLoading: loading, isError: erro } = useQuery({
    queryKey: ["get-products"],
    queryFn: getProducts
  })
  return { products, loading, erro };
}

export default useGetProducts;