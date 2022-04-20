import { Box, Button, Container } from '@mui/material';
import { useContext } from 'react';
import { contexto } from '../context/CartContext';

const Cart = ()=>{
    const {itemsCarrito,sumaCarrito,borrarCarrito,quitarItem} =useContext(contexto)

    const vacia =()=>{
        borrarCarrito()
    }
    const quita=(e)=>{
        quitarItem(e.target.id)
        console.log(e.target.id)
        }


    return(
        <Container>
        
            <h1>Carrito de compras</h1>
            
            {itemsCarrito.map((item,i) =>{ 
                return (<Box sx={{ p: 2, display: 'flex',alignItems: 'center',  justifyContent: 'space-around',boxShadow: 3 }} key={item.id}> 
                            <Box sx={{ display: 'flex'}}>
                                <Box > {item.cantidad}  Unidades - {item.item} - ${item.precio} </Box>

                                <Box sx={{ gap: 2, color: 'gray'}}> Subtotal ${item.cantidad*item.precio}</Box>
                            </Box>
                            <Button id={item.id} onClick={quita} sx={{fontSize:20, ml:"auto", color: 'warning.main' }}>X</Button>
                            
                </Box> )})
            }
            <h2>Agregaste {sumaCarrito.cantidad} items al carrito por un total de <span>${sumaCarrito.precio}</span></h2>
            <Button  variant="outlined" color="error" onClick={vacia} >vaciar carrito</Button>
            <Button sx={{m:3}} variant="contained"color="success" >Finalizar Compra</Button>
        </Container>
    )
}

export default Cart