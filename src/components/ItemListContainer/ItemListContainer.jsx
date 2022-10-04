import React from "react";
import { Item } from "../ItemDetailContainer/ItemDetailContainer";
import '../ItemListContainer/ItemListContainer.css'
import creality3dEnder3Pro from '../../assets/Creality3dEnder3Pro.jpg'

//https://www.mockachino.com/spaces/a2b81ae8-6185-4b

const cards = [
    {
        id: 1,
        tipe: 'impresora',
        image: creality3dEnder3Pro,
        title: 'Impresora 3D Creality Ender 3 Pro',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veritatis?'
    },
    {
        id: 2,
        tipe: 'impresora',
        image: creality3dEnder3Pro,
        title: 'Impresora 3D Creality Ender 3 Pro',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veritatis?'
    },
    {
        id: 3,
        tipe: 'impresora',
        image: creality3dEnder3Pro,
        title: 'Impresora 3D Creality Ender 3 Pro',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, veritatis?'
    }
]


export function ItemListContainer() {
    return (
        <>
            <div className="container d-flex mt-5 h-100 align-items-center">
                <div className="row">
                    {
                        cards.map(card => (
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
    )
}

