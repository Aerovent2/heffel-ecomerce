import React, { useState } from 'react'
import CargarProductos from '../components/CargarProductos'
import VentasContainer from './VentasContainer'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const Admin = () => {
    const [nuevoProducto, setNuevoProducto]=useState(false)
  return (<>

    <Button variant='contained' color='secondary'  onClick={()=>{setNuevoProducto(!nuevoProducto)}}>{nuevoProducto? "Ver Lista de Ventas":"Agregar nuevo Producto"}</Button>
    {!nuevoProducto && <VentasContainer></VentasContainer>}
    
    {nuevoProducto && <CargarProductos></CargarProductos>}
    
  </>)
}

export default Admin