import React, { useEffect, useState } from 'react';
import { Cards } from '../Cards/Cards';

import '../ItemListContainer/ItemListContainer.css'
import { list } from './list'


//https://www.mockachino.com/spaces/a2b81ae8-6185-4b


export function ItemListContainer() {

    const [products, setProducts] = useState([]);


    useEffect(() => {
    const getProd = new Promise (resolve =>{
        setTimeout(() => {
            resolve (list)
        }, 1500)
    });
    getProd.then(res => setProducts(res));
    
    }, [])

  return (
    <>
      {products.length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <>
            <div className="container d-flex mt-5 h-100 align-items-center">
                <div className="row">
                    {
                        products.map(product => (
                            <div className="col-md-4" key={product.id}>
                                < Cards image={product.image}
                                    title={product.title}
                                    description={product.description}
                                    id={product.id}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
      )}
    </>
  );
};


