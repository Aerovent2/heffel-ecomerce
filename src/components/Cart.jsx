import { Box, Button, Container } from '@mui/material';
import {useContext, useState,useEffect } from 'react';
import { contexto } from '../context/CartContext';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {  useNavigate } from 'react-router-dom';
import Login from './Login';




const Cart = ()=>{
    const {itemsCarrito,sumaCarrito,borrarCarrito,quitarItem,finalizarCompra,idCompra,datosIngresados} =useContext(contexto)
    
    const [open, setOpen] = useState(false);


    useEffect(() => {
        if (idCompra){
            setOpen(true);}
    }, [idCompra])
    
    

    const path = useNavigate()
    const volver = ()=>{
        path("/" )
    }
    
const finalizarCompraHandler =()=>{
            finalizarCompra();
    }

    
    const vacia =()=>{
        borrarCarrito()
    }
    const quita=(e)=>{
        quitarItem(e.target.id)
        }

        const handleClose = () => {
            setOpen(false);
            volver()
            vacia()
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
            {!datosIngresados? <Login></Login>
            :<Button sx={{m:3}} variant="contained"color="success" onClick={finalizarCompraHandler}>Finalizar Compra</Button>}

                                <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">
                                    {"Compra Realizada "}
                                    </DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Compra exitosa id : {idCompra}
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose} autoFocus>
                                        Aceptar
                                    </Button>
                                    </DialogActions>
                                </Dialog>
            
        </Container>
        
    )
}

export default Cart