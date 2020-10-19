import React, { useEffect, useState } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import api from '../../services/api';

import { ProductList } from './styles';

const Home = () => {
   // Estado
   const [products, setProducts] = useState([]);

   // Chamada a api
   useEffect(() => {
      async function loadProducts() {
         const response = await api.get('products');

         setProducts(response.data);
      }

      loadProducts();
   }, []);
   return (
      <ProductList>
         {products.map((product) => (
            <li key={product.id}>
               <img src={product.image} alt={product.title} />
               <strong>{product.title}</strong>
               <span>{product.price}</span>
               <button type="button">
                  <div>
                     <MdAddShoppingCart size={16} color="#fff" /> 3
                  </div>
                  <span>ADICIONAR AO CARRINHO</span>
               </button>
            </li>
         ))}
      </ProductList>
   );
};

export default Home;
