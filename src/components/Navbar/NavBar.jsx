import React from "react";
import styled from "styled-components";
import Cart from "../CartWidget/CartWidget";
import BurguerButton from "./BurguerButton";


function NavBar() {
  return (
    <>
      <NavContainer>
        <div className="container">
          <h1 className="logo">
            <a href="/">Planeta 3D</a>
          </h1>
          <ul>
            <li>
              <a href="/">
                Acerca de
              </a>
            </li>
            <li>
              <a href="/">Productos</a>
            </li>
            <li>
              <a href="/">Servicios</a>
            </li>
            <li>
              <a href="/">Contacto</a>
            </li>
          </ul>
          <div className="burguer">
            <BurguerButton />
          </div>
          <div>
            <Cart/>
          </div>
        </div>
      </NavContainer>
    </>
  );
}

export default NavBar;

const NavContainer = styled.nav`
  position: fixed;
  background-color: #222;
  top: 0;
  left: 0;
  right: 0;
  transition: all 0.3s ease-in-out;
  

  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    transition: all 0.3s ease-in-out;
    height: 100px;
  }

  ul {
    display: flex;
    list-style-type: none;
    align-items: center;
    justify-content: center;
    margin: 0px;
  }

  a {
    color: #fff;
    text-decoration: none;
    padding: 7px 15px;
    transition: all 0.3s ease-in-out;
  }

  a.current,
  a:hover {
    color: #c0392b;
    font-weight: bold;
  }

  .burguer {
    @media(min-width: 768px){
    display:none;
   }
  }

`;
