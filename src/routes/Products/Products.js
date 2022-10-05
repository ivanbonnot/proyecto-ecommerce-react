import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState({});

  useEffect(() => {
    fetch('https://www.mockachino.com/a2b81ae8-6185-4b/products')
      .then((res) => res.json())
      .then((productsres) => setProducts(productsres));
      
  }, []);

  return (
    <div>
      {console.log(products)}
      {Object.keys(products).length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <div>
          {products.products.map((product) => {
            /* Sorry, la API no devuelve el id y tengo que hacer esto */
            const id = product.id
            return (
              <div key={id}>
                <Link to={`/products/${id}`}>{product.title}</Link>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Products;
