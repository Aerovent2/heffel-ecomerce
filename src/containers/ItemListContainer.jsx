import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {useState, useEffect} from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import productos from "../db/productos.json"

/*let products=[
    {
        "id": 1,
        "title": "Mouse Logitech M280",
        "description": "Mouse inalambrico negro",
        "price": 1550,
        "pictureUrl": "/img/products/mouse.webp",
        "category": "perifericos",
        "stock": 50
    },
    {
        "id": 2,
        "title": "Teclado Gadnic ZT900",
        "description": "Teclado gamer español Utemu",
        "price": 4499,
        "pictureUrl": "/img/products/teclado.webp",
        "category": "perifericos",
        "stock": 21
    },
    {
        "id": 3,
        "title": "Parlante HP DS-2101",
        "description": "Parlante HP negro potencia 15w",
        "price": 3950,
        "pictureUrl": "/img/products/parlante.webp",
        "category": "perifericos",
        "stock": 62
    },
    {
        "id": 4,
        "title": "Resma A4 75gr",
        "description": "Resma A4 Papel Autor 75 Gramos 500 Hojas",
        "price": 850,
        "pictureUrl": "/img/products/resma75.webp",
        "category": "resmas",
        "stock": 33
    },
    {
        "id": 5,
        "title": "Resma A4 80gr",
        "description": "Resma Autor A4 Papel 80 Gramos 500 Hojas",
        "price": 1550,
        "pictureUrl": "/img/products/resma80.webp",
        "category": "resmas","stock": 100
    },
    {
        "id": 6,
        "title": "Resma A4 90gr",
        "description": "Resma Report A4 Papel 90 Gramos 500 Hojas",
        "price": 1780,
        "pictureUrl": "/img/products/resma90.webp",
        "category": "resmas",
        "stock": 40
    },
    {
        "id": 7,
        "title": "Cartucho HP 664n",
        "description": "Cartucho HP 664 Negro Original",
        "price": 2065,
        "pictureUrl": "/img/products/664n.webp",
        "category": "tintas",
        "stock": 15
    },
    {
        "id": 8,
        "title": "Cartucho HP 664c",
        "description": "Cartucho HP 664 Color Original",
        "price": 2390,
        "pictureUrl": "/img/products/664c.webp",
        "category": "tintas",
        "stock": 2
    }
]*/
//https://mocki.io/v1/f012e37d-4d26-49ff-914c-1d09bc179c8b

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
