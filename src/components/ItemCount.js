import React, {useState} from "react"
import Button from "./Button"

const ItemCount = ({stock, initial, onAdd})=>{
//Estilos-------------------------------------------------------------------------    
    const estiloItemCount ={
        justifyContent: "center",
        alignItems: "center",
        border: "solid", 
        width: 200,
        borderRadius: 20
    }
    const estiloDivCantidad ={
        display : "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "solid", 
        borderRadius: 10
    }

//Funciones ------------------------------------------------------------------------

    const [contador, setContador] = useState(initial);
        
    const suma= ()=>{
        contador < stock ? setContador( contador +1): console.log("stock max")
    };

    const resta=()=>{
        contador > 1 ? setContador( contador -1): console.log("stock min")
    };

    const add = ()=>{
        onAdd(contador)
    }
//---------Render--------------------------------------------------------------
    return (
        <div style={estiloItemCount}>
            <h2>Item</h2>
            <div style={estiloDivCantidad}>
                <Button onClick = {resta} text="-" color="red"/>
                <button onClick = {resta}> - </button>
                <p> {contador} </p>
                <button onClick = {suma}> + </button>
                <Button onClick = {suma} text="+" color="green"/>
            </div>
            <button onClick = {add}>Comprar</button>
            <Button text="Agregar al Carrito" color="blue"/>
        </div>
    )
}
//los botones con estilo aun no funcionan usar los grises-----------------
export default ItemCount