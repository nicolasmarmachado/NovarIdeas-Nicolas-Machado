import { Button } from 'bootstrap';
import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import { Cartcontext } from './CartContext';

export default function Form() {
  const {cart, valorTotal}= useContext(Cartcontext);
  const [orderId,setOrderId]=useState("");
  const [name, setName]=useState("");
  const [surname, setSurname]=useState("");
  const [phone, setPhone]=useState("");
  const [email, setEmail]=useState("");
  console.log(name)
  console.log(surname)
  console.log(email)
  console.log(phone)
  
  const sendOrder =()=>{
      const orderDate = serverTimestamp();
      const order = {
        buyer: { name, surname, phone, email },
        items: cart,
        total: valorTotal,
        date: orderDate,
      };
    const db = getFirestore();
    const ventas = collection(db, "ventas");
    addDoc(ventas, order).then(({ id }) => setOrderId(id));
  }
console.log("Id: " + {orderId})
 
  return (
    <>
      <div >
        <div>
          <label for="name">Nombre: </label>
          <input
            placeholder="Escriba su nombre"
            type={"text"}
            value={name}
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="surname">Apellido: </label>
          <input
            placeholder="Escriba su apellido"
            type={"text"}
            value={surname}
            id="surname"
            onChange={(e) => {
              setSurname(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="email">Email: </label>
          <input
            placeholder="Escriba su email"
            type={"text"}
            value={email}
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div>
          <label for="phone">Teléfono: </label>
          <input
            placeholder="Escriba su teléfono"
            type={"text"}
            value={phone}
            id="phone"
            onChange={(e) => {
              setPhone(e.target.value);
            }}
          />
        </div>
      </div>
      <Link to='/checkout'><button type='submit' onClick={() => sendOrder()}>Submit</button></Link>
      
      </>
  );
}