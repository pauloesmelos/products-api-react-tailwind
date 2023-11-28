import axios from "axios";
import { useQuery } from "react-query";
import API from "../../api/API";

const getProduct = async (id) => {
  return axios.get(`${API}/${id}`)
  .then(response => response.data)
  .catch(erro => console.log(erro));
} 
// não repetir a mesma key ! 
const useGetProduct = (id) => {
  const query = useQuery(
    ["get-product"],
    () => getProduct(id),
    {
      onSuccess: (sucess) => console.log(sucess)
    }
  )
  return query;
}

export default useGetProduct;