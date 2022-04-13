import { useContext } from 'react';
import { contexto } from '../context/CartContext';


const Cart = ()=>{
    const {itemsCarrito,sumaCarrito,borrarCarrito,quitarItem} =useContext(contexto)

    const vacia =()=>{
        borrarCarrito()
    }
    const quita=(e)=>{
        quitarItem(e.target.id)
        }
    return(<>
        {itemsCarrito.map((item,i) =>{ 
            return (<div key={item.id}> <p>{item.cantidad}{item.item}  {item.precio} subtotal {item.cantidad*item.precio}
            </p><button id={item.id} onClick={quita}>X</button> </div> )})
        }
        <h2>Agregaste {sumaCarrito.cantidad} items al carrito por un total de <span>${sumaCarrito.precio}</span></h2>
    <button onClick={vacia}>vaciar carrito</button>
    
    </>)
}

export default Cart