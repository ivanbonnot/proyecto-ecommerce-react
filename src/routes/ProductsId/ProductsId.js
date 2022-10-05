import React, { useEffect, useState } from 'react';
import { Item } from "../ItemDetailContainer/ItemDetailContainer";
import '../ItemListContainer/ItemListContainer.css'
import { list } from './list'

import { Link } from 'react-router-dom';
//https://www.mockachino.com/spaces/a2b81ae8-6185-4b


export function ItemListContainer() {

    const [products, setProducts] = useState({});

    useEffect(() => {
        fetch(list)
            .then((res) => res.json())
            .then((productsres) => setProducts(productsres));

    }, []);
   
  return (
    <>
        {console.log(products)}
      {Object.keys(products).length === 0 ? (
        <div>Cargando...</div>
      ) : (
        <>
            <div className="container d-flex mt-5 h-100 align-items-center">
                <div className="row">
                    {
                        products.products.map(card => (
                            <div className="col-md-4" key={card.id}>
                                < Item image={card.image}
                                    title={card.title}
                                    description={card.description}
                                />
                                {console.log(JSON.stringify(card))}
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

