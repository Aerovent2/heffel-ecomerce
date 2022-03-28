import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {useState, useEffect} from 'react'
import ItemList from '../components/ItemList'
import ItemCount from '../components/ItemCount';


const productosIniciales = [
    {id:1, title:"Mouse Logitech M280", description:"Mouse inalambrico negro", price:1550, pictureUrl:"/img/products/mouse.webp" },
    {id:2, title:"Teclado Gadnic ZT900", description:"Teclado gamer español Utemu", price:4499, pictureUrl:"/img/products/teclado.webp" },
    {id:3, title:"Parlante HP DS-2101", description:"Parlante HP negro potencia 15w", price:3950, pictureUrl:"/img/products/parlante.webp" },
    {id:4, title:"Resma A4 75gr", description:"Resma A4 Papel Autor 75 Gramos 500 Hojas", price:850, pictureUrl:"/img/products/resma75.webp" },
    {id:5, title:"Resma A4 80gr", description:"Resma Autor A4 Papel 80 Gramos 500 Hojas", price:1550, pictureUrl:"/img/products/resma80.webp" },
    {id:6, title:"Resma A4 90gr", description:"Resma Report A4 Papel 90 Gramos 500 Hojas", price:1780, pictureUrl:"/img/products/resma90.webp" },
    {id:7, title:"Cartucho HP 664n", description:"Cartucho HP 664 Negro Original", price:2065, pictureUrl:"/img/products/664n.webp" },
    {id:8, title:"Cartucho HP 664c", description:"Cartucho HP 664 Color Original", price:2390, pictureUrl:"/img/products/664c.webp" },
]

const promesa = new Promise((res,rej)=>{
    setTimeout(() => {
        res(productosIniciales)
    }, 2000);
    
});




export const ItemListContainer=({greeting, color, tamanio})=>{//estilos y saludo por props
    const estiloItemListContainer = {
        color,
        fontSize: tamanio,
    }

    const [productos,setProductos]=useState([]);
    const [loading,setLoading]=useState(true);
    
    useEffect(()=>{
        promesa.then((productos)=>{
            setProductos(productos)
            console.log(productos)
            setLoading(false)
        })
        .catch(()=>{
            console.log("algo salio mal")
        })    
    },[]);

    const onAdd =(contador)=>{
        console.log(`estas comprando ${contador} productos` )
    }
    return(
        <>
        <CssBaseline />
        <Container maxWidth="sm">
            <div className="ItemListContainer">
                <h2 style={estiloItemListContainer}>{greeting}</h2>
                <ItemList loading={loading} productos={productos}></ItemList>
            </div>
        </Container>
        <ItemCount initial={1} stock={10} onAdd={onAdd}></ItemCount>
        </>
    )
}