import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import {  Button, Container } from '@mui/material';
import ItemCount from './ItemCount';
import { useState } from 'react';

const ItemDetail = ({item})=>{

    const [clicked, setClicked] = useState(false)
    const onAdd =(contador, id)=>{
    let itemsParaElCarrito=[contador,id]
        
    setClicked(true)
        console.log(`estas comprando ${contador} productos con id ${id}` )
        console.log(itemsParaElCarrito)
    
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