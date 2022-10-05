import React from "react";
import './ItemDetailContainer.css'
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { list } from "../ItemListContainer/list";
import { Link } from 'react-router-dom';



export function ItemDetailContainer() {
    const [product, setProduct] = useState({})
    const { id } = useParams()

    useEffect(() => {
        const getProd = new Promise(resolve => {
            setTimeout(() => {
                resolve(list)
            }, 3000)
        });

        getProd.then(res => setProduct(res.find((prod) => prod.id === Number(id))));
    }, [id])

    return (
        <>
            {
                list.map(prod => (
                    <>
                        <div className="card text-center bg-dark">
                            <img src={prod.image} alt="" className="card-img-top" />
                            <div className="card-body text-light">
                                <h4 className="card-title">{prod.title}</h4>
                                <p className="card-text">{prod.description}</p>

                                <Link to={`/products`}> Atrás </Link>

                            </div>
                        </div>
                    </>
                ))
            }
        </>
    )
}
