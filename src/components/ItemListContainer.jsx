import React from "react";
import "./estilos.css";
import ItemList from "./ItemList";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore'

export default function ItemListContainer() {
  const {id}=useParams();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const db = getFirestore();

    let productos;
    if(!id){
      productos=collection(db, "productos");
    }
    else{
      productos=query(collection(db, "productos"), where("categorias","==", id))
    }

    getDocs(productos).then((res) => {
       setProducts(res.docs.map(item=>({id: item.id, ...item.data()})))
    });
  }, [id]);

  return (
    <>
      <h3 className="bienvenido">Bienvenidos a NOVAR Ideas. <br />
        Elija su producto de la tienda aquí abajo</h3>
      <ItemList products={products}  />
    </>
  );
}

