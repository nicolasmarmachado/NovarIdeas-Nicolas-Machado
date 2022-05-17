import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Cartcontext } from "./CartContext";
import "./estilos.css";

export default function CartWidget() {
  const {cantidadTotal }= useContext(Cartcontext);

  return (
    <>
      <div  className="cartwidget"> 
          ({cantidadTotal})
        <Link to="/cart"> <img as={Link} to="/cart" src="cart3.svg" alt="cartwidget" className="carrito" /></Link>
      </div>
    </>
  );
};
