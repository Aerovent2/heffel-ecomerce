import { Button, Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom';
import CargarProductos from './CargarProductos';
const EmptyCart = () => {
    return (
        <Container>
            <h1>Aun No Agregaste Nada al Carrito</h1>
            <Box sx={{display: 'flex', justifyContent: 'center' }}>
                <img src="/img/travolta.gif" alt="not found"/> 
            </Box>
            <Link to="/"style= { { textDecoration: 'none' }} ><Button variant="outlined" color="success">Volver</Button></Link>
            <CargarProductos></CargarProductos>
        </Container>
    )
}

export default EmptyCart