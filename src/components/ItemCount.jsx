import { Box } from "@mui/material";
import React, {useState} from "react"
import Button from "./Button"

const ItemCount = ({item, initial, onAdd})=>{


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
        <Box >
            <h2>Unidades Disponibles {item.stock} </h2>
            <Box sx={{display: 'flex',alignItems: 'center',  justifyContent: 'space-around'}}>
                <Button onClick = {resta} text="-" color="red"/>
                <p> {contador} </p>
                <Button onClick = {suma} text="+" color="green"/>
            </Box>
            <Box sx={{display: 'flex',alignItems: 'center',  justifyContent: 'space-around'}}>
                <Button onClick = {add} text="Agregar al Carrito" color="blue"/>
            </Box>
        </Box>
    )
}

export default ItemCount