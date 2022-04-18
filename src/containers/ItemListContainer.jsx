import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {useState, useEffect} from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import productos from "../db/productos.json"



const productosIniciales = productos


const promesa = new Promise((res,rej)=>{
    setTimeout(() => {
        res(productosIniciales)
    }, 2000);
    
});




export const ItemListContainer=({greeting, color, tamanio})=>{//estilos y saludo por props
    const {id} = useParams()
    
    const estiloItemListContainer = {
        color,
        fontSize: tamanio,
    }
    const [titulo, setTitulo]=useState(greeting)
    const [productos,setProductos]=useState([]);
    const [loading,setLoading]=useState(true);
    
    useEffect(()=>{
        promesa.then((productos)=>{
            if (id){
                const productosFiltrados = productos.filter(producto => producto.category === id)
                setProductos(productosFiltrados)
                const idTitulo = id.toUpperCase()
                setTitulo(idTitulo)
            }
            else{
                setProductos(productos)
                setTitulo("Bienvenido")
            }
            
            
            setLoading(false)
        })
        .catch(()=>{
            console.log("algo salio mal")
        })    
    },[id]);


    return(
        <>
        <CssBaseline />
        <Container >
            <div className="ItemListContainer">
                <h2 style={estiloItemListContainer}>{titulo}</h2>
                <ItemList loading={loading} productos={productos}></ItemList>
            </div>
        </Container>
        
        </>
    )
}
