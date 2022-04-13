import React, {useState} from "react"
import Button from "./Button"

const ItemCount = ({item, initial, onAdd})=>{
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
        contador < item.stock ? setContador( contador +1): console.log("stock max")
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
            <h2>Unidades Disponibles {item.stock} </h2>
            <div style={estiloDivCantidad}>
                <Button onClick = {resta} text="-" color="red"/>
                <p> {contador} </p>
                <Button onClick = {suma} text="+" color="green"/>
            </div>
            <Button onClick = {add} text="Agregar al Carrito" color="blue"/>
        </div>
    )
}

export default ItemCount