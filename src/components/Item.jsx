import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {  useNavigate } from 'react-router-dom';

const Item= ({item})=>{
    const path = useNavigate()
    const navegar = ()=>{
        path("/producto/" + item.id)
    }
    
    return(
            <Card  sx={{ minWidth: 175, maxWidth:215 }}>
                <CardContent onClick={navegar}>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.title}
                    </Typography>
                    <img src={item.pictureUrl} alt="imagen no disponible"></img>
                    
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        ${item.price}
                    </Typography>
                </CardContent>
                <CardActions>
                        <Button onClick={navegar}>Detalle</Button>
                </CardActions>
            </Card>
        
    )
}

export default Item