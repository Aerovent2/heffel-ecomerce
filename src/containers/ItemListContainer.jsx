import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {useState, useEffect} from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import { db } from '../db/firebase';
import {getDocs,collection,query,where} from "firebase/firestore"


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

        const coleccionProductos = collection(db,"productos");
        let consulta
        if(id){
                consulta = query(coleccionProductos, where("category", "==",id))
                setTitulo(id.toUpperCase())
        }   
        else {  
                consulta = coleccionProductos;
                setTitulo("Bienvenido")
        }

        
        getDocs(consulta)
        .then((result)=>{
            const docs =   result.docs
            const lista = docs.map(producto =>{
                const id = producto.id
                const product = {
                    id,...producto.data()
                }
                return product
                })
            setProductos(lista)
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
