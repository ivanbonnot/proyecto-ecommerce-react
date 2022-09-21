import './App.css';
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'

function App() {
    return (
        <>
            <NavBar />
            <ItemListContainer greeting="Iván" />
        </>
    )
}

export default App;
