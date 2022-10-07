import React from "react";
import "./ItemDetailContainer.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { list } from "../ItemListContainer/list";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";
import Counter from "../Counter/Counter";

const onAdd = (cantidad) => {
  console.log(`${cantidad}`);
}

export function ItemDetailContainer() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getProd = new Promise((resolve) => {
      setTimeout(() => {
        resolve(list);
      }, 1500);
    });

    getProd.then((res) =>
      setProduct(res.find((prod) => prod.id === Number(id)))
    );
  }, [id]);

  return (
    <>
      {Object.keys(product).length === 0 && product.constructor === Object ? (
        <div className="spinner">
          <Spinner />
        </div>
      ) : (
        <div className="container d-flex mt-5 justify-content-center align-items-center">
          <div className="row">
            <div className="col-md-12 mt-5">
              <div className="card text-center bg-dark">
                <img src={product.image} alt="" className="card-img-top" />
                <div className="card-body text-light">
                  <h4 className="card-title">{product.title}</h4>
                  <p className="card-text">{product.description}</p>
                  <Counter initial={1} stock={10} onAdd={onAdd} />
                  <Link to={`/`} className="atras fs-4"> Atrás </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
