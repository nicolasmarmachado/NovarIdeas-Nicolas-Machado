import React, { useContext, } from 'react'
import { Card } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { Cartcontext } from './CartContext';
import "./estilos.css";

export default function Cart() {
  const {cart, clear, removeItem, cantidadTotal, valorTotal}= useContext(Cartcontext);

  function handleClickClear(){
    clear();
  }
  
  return (
    <>
      <div className='resumenCarrito'>
        {cart.length > 0
          ? cart.map((product) => (
              <div key={product.id}>
                <Card>
                  <Card.Body>
                    <img
                      src={product.imagen}
                      alt="imagen"
                      className="cardCarrito"
                    />
                    <br />
                    <b>{product.titulo}</b> <br />$ {product.precio} <br />
                    {product.cantidad} <br />
                    <button onClick={() => removeItem(product.id)}>
                      Remover este item
                    </button>
                  </Card.Body>
                </Card>
              </div>
            ))
          : "El carrito está vacio"}
        <br />
        <div>
          Cantidad de items: <b>{cantidadTotal}</b> <br />
          Importe total a pagar: $ <b>{valorTotal}</b> <br />
        </div>
        <br />
        <div>
          <button onClick={handleClickClear}>Remover todos los items</button>
        </div>
        <br />
        <div>
          <Link to="/" className="botonCart">
            Volver a TIENDA
          </Link>
        </div>
        <br />
        <div>
          {cantidadTotal !== 0 ? (
            <Link to="/formcheckout" className="botonFinalizar">
              Finalizar compra
            </Link>
          ) : (
            "No hay items agregados en el carrito"
          )}
        </div>
      </div>
    </>
  );}