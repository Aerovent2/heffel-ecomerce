import React from  'react'
import {  Button, Container } from '@mui/material';


const Ventas = ({venta}) => {
  return (
            <Container>
                <h4>Comprador :{venta.nombre}</h4>
                        {venta.items.map( (item,index)=>{
                                return (<div key={index}> 
                                <div>{item.item}</div>
                                <div>cantidad: {item.cantidad}</div>
                                <div>precio: {item.precio}</div>
                                </div>)
                            }
                            )}
                        <li>totalventa ${venta.total}</li>
                        <Button>Entregado</Button>
            </Container>
  )
}

export default Ventas