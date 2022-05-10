import React, { useContext, useEffect, useState } from 'react'
import {collection, getFirestore, addDoc, serverTimestamp, getDocs} from 'firebase/firestore'
import { Cartcontext } from './CartContext';
import CheckOut from "./CheckOut";
import { Button, Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom';


export default function CreateOrder({name, surname, email, phone}) {
  // const [orders,setOrders]=useState();
  const [compra, setCompra ]=useState();
  const [comprador, setComprador ]=useState();
  const [ items, setItems]=useState();

  useEffect(() => {
    const db = getFirestore();
    const ordenes=collection(db, "ventas");

    getDocs(ordenes).then((res) => {
      setCompra({id: res.id, ...res.data()});
      setComprador(res.data().buyer);
      setItems(res.data().items);
    });
  }, [])
  
 return (
   <>
     <CheckOut comprador={comprador} items={items}/>
   </>
 );
}