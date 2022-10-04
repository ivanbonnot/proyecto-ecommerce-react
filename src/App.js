import './App.css';
import React from 'react';
import NavBar from './components/Navbar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
    return (
        <>
            <NavBar />
            <div className='item-container'>
                <ItemListContainer />
            </div>
        </>
    )
}

export default App;
