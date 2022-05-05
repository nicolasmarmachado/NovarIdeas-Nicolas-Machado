import React from "react";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart";
import CartContextProvider from "./components/CartContext";
import CreateOrder from "./components/CreateOrder";
// import CheckOut from "./components/CheckOut";
import Form from "./components/Form";

export default function App() {

  return (
    <>
      <CartContextProvider>
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route exact path="/order" element={<CreateOrder/>} />
            <Route exact path="/form" element={<Form/>} />
            <Route exact path="/" element={<ItemListContainer />} />
            <Route exact path="/categorias/:id"element={<ItemListContainer />} />
            <Route exact path="/item/:id" element={<ItemDetailContainer />} />
            <Route exact path="/cart" element={<Cart />} /> 
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  );
}
