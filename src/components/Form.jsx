// import { addDoc, collection, getFirestore, serverTimestamp } from 'firebase/firestore';
import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// import { Cartcontext } from './CartContext.jsx';
// import CreateOrder from "./CreateOrder.jsx";

export default function Form() {
  const [name, setName]=useState("");
  const [surname, setSurname]=useState("");
  const [phone, setPhone]=useState("");
  const [email, setEmail]=useState("");
  console.log(name)
  console.log(surname)
  console.log(email)
  console.log(phone)
 
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
      <Link to="/order" className="botonDetalle">
        Crear Orden de compra y pagar
      </Link>
  
       {/* <CreateOrder name={name} surname={surname} phone={phone} email={email} /> */}
      
      </>
  );
}


















// import { addDoc, collection, getFirestore, writeBatch } from 'firebase/firestore';
// import React, { useContext, useEffect, useState } from 'react'
// import { Cartcontext } from './CartContext';
// import CreateOrder from './CreateOrder';
// import { Link } from 'react-router-dom';

// export default function Form2() {
//   const {cart, cantidadTotal, valorTotal}= useContext(Cartcontext);
//   const [nico,setNico]=useState();

//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");

//   // function terminarCompra (){
//   //   const db = getFirestore();
//   //   const batch=writeBatch()
//   //   const =collection(db, "ventas");

//   //   const order={
//   //       buyer: {name, phone, email},
//   //       items: cart,
//   //       total: 410
//   //   }
//   //   addDoc(ventas,order).then(({id})=>setNico(id))
//   // }

//   useEffect(() => {
//     console.log(name, email, phone);
//   }, [name, email, phone]);

//   return (
//     <>
//       <input
//         type={"text"}
//         value={name}
//         onChange={(e) => {
//           setName(e.currentTarget.value);
//         }}
//       />
//       <input
//         type={"text"}
//         value={email}
//         onChange={(e) => {
//           setEmail(e.currentTarget.value);
//         }}
//       /><input
//       type={"text"}
//       value={phone}
//       onChange={(e) => {
//         setPhone(e.currentTarget.value);
//       }}
//     />
//     <Link to="/create" >Crear Orden de compra y pagar</Link >
//     {/* <CreateOrder name={name} phone={phone} email={email}/> */}
//     </>
//   );
// }
