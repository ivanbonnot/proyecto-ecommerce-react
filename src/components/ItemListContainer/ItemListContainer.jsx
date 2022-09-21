import React from "react";
import '../ItemListContainer/ItemListContainer.css'

export function Greeting(props) {
    return (
        <>
            <section>
                <h2>Hola {props.name}</h2>
            </section>
        </>
    )
}
