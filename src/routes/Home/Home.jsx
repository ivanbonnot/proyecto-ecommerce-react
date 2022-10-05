import React from 'react';

import styled from "styled-components";

import 'bootstrap/dist/css/bootstrap.min.css'

function Home() {
    return (
        <>
            <Welc>
                <h2>Entrar a productos en el navbar</h2>
            </Welc>
        </>
    )
}

export default Home;

const Welc = styled.div`
margin-top: 150px;
text-align: center;
`