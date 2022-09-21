import React from "react";
import '../ItemListContainer/ItemListContainer.css'

export function ItemListContainer(props) {
    return (
        <>
            <section>
                <h2>Hola {props.greeting}</h2>
            </section>
        </>
    )
}
