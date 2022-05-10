import { Button ,Box } from "@mui/material";
import React, {useState} from "react"


const ItemCount = ({item, initial, onAdd})=>{

    
    const [contador, setContador] = useState(initial);
    const suma= ()=>{
        contador < item.stock && setContador( contador +1)
    };
    const resta=()=>{
        contador > 1 && setContador( contador -1)
    };
    const add = ()=>{
        onAdd(contador)
    }

    return (
        <div>
            <Box sx={{display: "flex", justifyContent:"space-between"}}>
                <Button variant="outlined" onClick={resta}>-</Button>
                <p> {contador} </p>
                <Button variant="outlined" onClick={suma}>+</Button>
            </Box>
            <Box >
                <Button variant="outlined" color="success" onClick={add}>agregar al carrito</Button>
            </Box>
        </div>
    )
}

export default ItemCount