import React, { useState,useContext } from 'react'
import CargarProductos from '../components/CargarProductos'
import VentasContainer from './VentasContainer'
import { Button } from '@mui/material';
import { contexto } from '../context/CartContext';
import {  useNavigate } from 'react-router-dom';

const Admin = () => {
    const {admin} =useContext(contexto)

    const path = useNavigate()
    const volver = ()=>{
            path("/")
    }

    if(!admin){
        volver()
    }
    const [nuevoProducto, setNuevoProducto]=useState(false)
  return (<>

    <Button variant='contained' color='secondary' fullWidth onClick={()=>{setNuevoProducto(!nuevoProducto)}}>{nuevoProducto? "Ver Lista de Ventas":"Agregar nuevo Producto"}</Button>
    {!nuevoProducto && <VentasContainer></VentasContainer>}
    
    {nuevoProducto && <CargarProductos></CargarProductos>}
    
  </>)
}

export default Admin