import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {  Button, Container } from '@mui/material';
import ItemCount from './ItemCount';
import { useState, useContext } from 'react';
import { contexto } from '../context/CartContext';


const ItemDetail = ({item})=>{

    const {agregarItem,} =useContext(contexto)
    const [clicked, setClicked] = useState(false)

    const onAdd =(contador)=>{
                agregarItem({cantidad:contador,id:item.id,item:item.title, precio:item.price})
                setClicked(true)
    } 
    
    return(
        <Container>
            
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
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
                    </CardContent>
                <CardActions>
                    {clicked ? <Link to="/cart"><Button>Ir Al Carrito</Button></Link>
                    :<ItemCount initial={1} item={item} onAdd={onAdd}></ItemCount>}
                </CardActions>
            </Card>
        </Container>
    )
}

export default ItemDetail