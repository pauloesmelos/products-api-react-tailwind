import React from 'react';

export const GlobalCarrinho = React.createContext();
export const GlobalCarrinhoProvider = ({ children }) => {
  const [unidade, setUnidade] = React.useState(1);
  const add = () => {
    setUnidade(e => e + 1);
  }
  const less = () => {
    unidade > 1 ? setUnidade(unidade - 1) : setUnidade(unidade);
  }
  const reset = () => {
    setUnidade(1);
  }
  return(
    <GlobalCarrinho.Provider value={{unidade, add, less, reset}}>
      {children}
    </GlobalCarrinho.Provider>
  );
}