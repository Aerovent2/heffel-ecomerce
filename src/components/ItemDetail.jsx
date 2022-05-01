import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {  Button } from '@mui/material';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { contexto } from '../context/CartContext';
import "./ItemDetail.css";
import ModificaProductos from './ModificaProductos';


const ItemDetail = ({item})=>{

    const {agregarItem,admin} =useContext(contexto)
    const [clicked, setClicked] = useState(false)

    const onAdd =(contador)=>{
                agregarItem({cantidad:contador,id:item.id,item:item.title, precio:item.price})
                setClicked(true)
    } 


    return(
        <div className='container' >
            <Link to="/" style= { { textDecoration: 'none' }} ><Button>Volver</Button></Link>
            
            <div className='card'>
                <div className='cardCont'>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.title} 
                    </Typography>
                        <img src={item.pictureUrl} alt="imagen no disponible"></img>
                    <Typography variant="h5" component="div">
                        {item.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        ${item.price}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }}>
                        Disponibles {item.stock}
                    </Typography>
                        
                </div>
                {!admin && <div className='itemCount'>
                    {clicked ? <Link to="/cart" style= { { textDecoration: 'none' }} ><Button>Ir Al Carrito</Button></Link>
                    :<ItemCount initial={1} item={item} onAdd={onAdd}></ItemCount>}
                </div>}

            </div>
            {admin && <ModificaProductos item={item}></ModificaProductos>}
        </div>
    )
}

export default ItemDetail