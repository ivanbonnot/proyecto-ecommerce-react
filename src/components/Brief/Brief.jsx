import React, { useState, useContext } from "react";
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebase/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import Spinner from "../Spinner/Spinner";
import '../Brief/Brief.css'

export const Brief = () => {
    const formCont = document.querySelector('.formContainer')

    const { productosCarrito, clear, totalCompra } = useContext(CartContext)
    const [idOrden, setIdOrden] = useState()
    const [loading] = useState(false)
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Apellido: '',
        Telefono: '',
        Email: '',
        EmailComp: ''
    })
    const { Nombre, Apellido, Telefono, Email, EmailComp } = buyer

    const Input = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const generarPedido = async (data) => {
        try {
            const col = collection(db, 'ordenes')
            const order = await addDoc(col, data)
            setIdOrden(order.id)
            clear()

        } catch (error) {
            return (
                error
            )
        }
    }

    const enviar = (e) => {
        e.preventDefault()

        if (Nombre === '' || Apellido === '' || Telefono === '' || Email === '') {
            msjerror('Todos los compos son obligatorios')

        } else if (Email !== EmailComp) {
            msjerror('La dirección de mail debe coincidir')

        } else {
            const dia = serverTimestamp()
            const items = productosCarrito.map(e => { return { id: e.id, Titulo: e.title, Precio: e.price } })
            const total = totalCompra()
            const data = { buyer, dia, items, total }
            generarPedido(data)
        }
    }

    const msjerror = (mensaje) => {
        const button = document.querySelector('.send')
        const comprobar = document.createElement('p')
        comprobar.classList.add('comprobacion')
        comprobar.innerHTML = `${mensaje}`
        formCont.appendChild(comprobar)
        button.disabled = true
        setTimeout(() => {
            button.disabled = false
            formCont.removeChild(comprobar)
        }, 3000);

    }


    return (
        <>
            {loading ?
                <div className="spinner">
                    <Spinner />
                </div>
                : (!idOrden && <div>
                    <form
                        onSubmit={enviar}
                        className="formContainer" >
                        <div>
                            <h2> Carga tus datos</h2>
                        </div>
                        <div>
                            <p>
                                <input type="text" name='Nombre' onChange={Input} value={Nombre} placeholder="Nombre" />

                            </p>
                            <p>
                                <input type="text" name="Apellido" onChange={Input} value={Apellido} placeholder="Apellido" />

                            </p>
                            <p>
                                <input type="number" name="Telefono" onChange={Input} value={Telefono} placeholder="Teléfono" />

                            </p>
                            <p>
                                <input type="email" name="Email" onChange={Input} placeholder="eMail" value={Email} />
                            </p>
                            <p>
                                <input type="email" name="EmailComp" onChange={Input} placeholder="Ingrese de nuevo su eMail" value={EmailComp} />
                            </p>
                            <p>
                                <button className="send" type="submit"> Enviar</button>
                            </p>
                        </div>
                    </form>
                </div>)}
            <div>
                {
                    idOrden && (
                        <div className="orderReady">
                            <h3>¡Gracias por su Compra!</h3>
                            <p >{`Su codigo de operacion es: ${idOrden}`}</p>
                            <p >{`Le enviarenos a ${Email} la factura electronica de su compra`}</p>
                            <div>
                                <button><Link to={'/'}>Realizar otra compra</Link></button>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    )

}
