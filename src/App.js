import './App.css';
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import { Greeting } from './components/ItemListContainer/ItemListContainer'

function App() {
    return (
        <>
            <NavBar />
            <Greeting name="Iván" />
        </>
    )
}

export default App;
