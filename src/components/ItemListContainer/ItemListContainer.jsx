import React, { useEffect, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import { Cards } from '../Cards/Cards';

import '../ItemListContainer/ItemListContainer.css'
import { list } from './list'
import { useParams } from 'react-router-dom';


//https://www.mockachino.com/spaces/a2b81ae8-6185-4b


export function ItemListContainer() {

    const [products, setProducts] = useState([]);
    const { categoryid } = useParams();

    useEffect(() => {
    const getProd = new Promise (resolve =>{
        setTimeout(() => {
            resolve (list)
        }, 1500)
    });
    if (categoryid) {
      getProd.then(res => 
        setProducts(res.filter((products) => products.categoryid === Number(categoryid))));
    } else {
      getProd.then(res => setProducts(res));
    }
  
   
    
    }, [categoryid])

  return (
    <>
      {products.length === 0 ? (
        <div className='spinner'>
          <Spinner />
        </div>
      ) : (
        <>
            <div className="container d-flex mt-5 align-items-center justify-content-center">
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


