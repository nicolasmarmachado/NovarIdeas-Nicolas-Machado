import React, { useContext, useState } from 'react'
import {collection, getFirestore, addDoc, serverTimestamp} from 'firebase/firestore'
import { Cartcontext } from './CartContext';
// import CheckOut from "./CheckOut";
import { Card } from 'react-bootstrap'
// import { Link } from 'react-router-dom';


export default function CreateOrder({name, surname, email, phone}) {
    const {cart, valorTotal}= useContext(Cartcontext);
    const [orderId,setOrderId]=useState();
    
    const sendOrder =()=>{
        const orderDate = serverTimestamp();
        const order = {
          // buyer: { name, surname, phone, email },
          items: cart,
          total: valorTotal,
          date: orderDate,
        };
      const db = getFirestore();
      //  const batch=writeBatch()
      const ventas = collection(db, "ventas");
      addDoc(ventas, order).then(({ id }) => setOrderId(id));
    }
console.log(orderId)

 return(
    <>
      <div className='card' >
        <Card style={{width:"23em"}} >
          <Card.Body >
            <Card.Title style={{width:"16em"}}> hola</Card.Title>
            <div>
              <Card.Img variant="top"  />
            </div>
          </Card.Body>
        </Card>
      </div>
    </>
 )
}
//     console.log(nico)

    // return 
    // <><div>
    // Usted ha comprado: 
    // </div>
    // </>
  
    // useEffect(()=>{
    //     const db = getFirestore();
    //     const ventas=(collection(db, "ventas"))
    //     let buyer= { 
    //     buyer: { name, phone, email }, 
    //      items: [{id, title, price}],
    //      total: 100}

    //     addDoc(ventas, buyer). then(({id})=>{
    //         console.log(id)
    //     })
    // },[]);

    //ver 1:35:00   
//mapear cart para hacer la orden? 
// //obtener name, phone, email de Form
//     return <div>sendOrder</div>;
    
  
// }

