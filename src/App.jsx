import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Error from './components/page_not_found/Error';
import SpecifyProduct from './components/product/SpecifyProduct';
import { GlobalCarrinhoProvider } from './components/global/GlobalCarrinho.jsx';

const App = () => {
  
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <GlobalCarrinhoProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produto/:id" element={<SpecifyProduct />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </GlobalCarrinhoProvider>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App;