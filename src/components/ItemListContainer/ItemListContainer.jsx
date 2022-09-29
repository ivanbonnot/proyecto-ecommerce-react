import React from "react";
import styled from "styled-components";
import '../ItemListContainer/ItemListContainer.css'


export function ItemListContainer(props) {
    return (
        <>
            <CardItem>
           <div className="card">
                <div className="card-body">
                    <h4>Titulo { props.greeting }</h4>
                </div>
           </div>
           </CardItem>
        </>
    )
}

const CardItem = styled.Card`
    
`
