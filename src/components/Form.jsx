import {
	addDoc,
	collection,
	getFirestore,
	serverTimestamp,
	getDoc,
	doc,
} from 'firebase/firestore';
import React, { useContext, useState } from 'react';
import { Cartcontext } from './CartContext';
import "./estilos.css";

export default function Form() {
	const { cart, valorTotal, clear } = useContext(Cartcontext);
	const [orderId, setOrderId] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [order, setOrder] = useState(null);
	const [name, setName] = useState('');
	const [surname, setSurname] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');

	const sendOrder = () => {
		setIsLoading(true);
		const orderDate = serverTimestamp();
		const order = {
			buyer: { name, surname, phone, email },
			items: cart,
			total: valorTotal,
			date: orderDate,
		};
		const db = getFirestore();
		const ventas = collection(db, 'ventas');
		addDoc(ventas, order).then(({ id }) => {
			const db = getFirestore();

			const orderRef = doc(db, 'productos', id);

			getDoc(orderRef).then((res) => {
				setOrder(res);
				setOrderId(res.id);
        clear();
				setIsLoading(false);
			});
		});
	};

	if (isLoading) {
		return <h1>Cargando...</h1>;
	}

	return (
    <>
      {order ? (
        <>
          <div className="checkout">
            <b>
              Gracias por su compra!! Esperamos que haya sido placentero...
              <br />
              Su orden de compra ha sido generada con el siguiente ID:
              <p>{orderId}.</p><br />
              Utilicelo para realizar el pago o para futuros reclamos. Recuerde
              que cuenta con 30 días para hacerlo.
            </b>
          </div>
        </>
      ) : (
        <>
          <form className="formulario" onSubmit={() => sendOrder()}>
            <div>
              <label for="name">Nombre: </label> <br/>
              <input
                placeholder="Escriba su nombre"
                type="text"
                value={name}
                id="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label for="surname">Apellido: </label><br/>
              <input
                placeholder="Escriba su apellido"
                type="text"
                value={surname}
                id="surname"
                onChange={(e) => {
                  setSurname(e.target.value);
                }}
                required
              />
            </div>
            <div>
              <label for="email">Email: </label><br/>
              <input
                placeholder="Escriba su email"
                type="email"
                value={email}
                id="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                required
              />
            </div>
            <div>
              <label for="phone">Teléfono: </label><br/>
              <input
                placeholder="Escriba su teléfono"
                type="tel"
                value={phone}
                id="phone"
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                pattern="[0-9]*"
                required
              />
            </div>
            <button
              className="submit"
              type="submit"
            >
              Submit
            </button>
          </form>
        </>
      )}
    </>
  );
}