import React from "react";
//import styled from "styled-components";




export function Item({ image, title, description }) {
    return (
        <>
            <div className="card text-center bg-dark">
                <img src={image} alt="" />
                <div className="card-body text-light">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>

                </div>
            </div>
        </>
    )
}

