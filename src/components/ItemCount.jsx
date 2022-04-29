import { Button  } from "@mui/material";
import React, {useState} from "react"
import "./ItemCount.css";



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
            <div className="botoncillos">
                <Button variant="outlined" onClick={resta}>-</Button>
                <p> {contador} </p>
                <Button variant="outlined" onClick={suma}>+</Button>
            </div>
            <div >
                <Button variant="outlined" color="success" onClick={add}>agregar al carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount