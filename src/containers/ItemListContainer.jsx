import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import {useState, useEffect, useContext} from 'react'
import ItemList from '../components/ItemList'
import { useParams } from 'react-router-dom';
import { db } from '../db/firebase';
import {getDocs,collection,query,where} from "firebase/firestore"
import { contexto } from '../context/CartContext';


export const ItemListContainer=({greeting, color, tamanio})=>{//estilos y saludo por props
    const {id} = useParams()
    const estiloItemListContainer = {
        color,
        fontSize: tamanio,
    }
    const {admin} =useContext(contexto)
    const [titulo, setTitulo]=useState(greeting)
    const [productos,setProductos]=useState([]);
    const [loading,setLoading]=useState(true);
    const [consultaVacia,setConsultaVacia]=useState(false);

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
            if(docs.length >0){
                const lista = docs.map(producto =>{
                const id = producto.id
                const product = {
                    id,...producto.data()
                }
                return product
                })
                if (admin){
                    setProductos(lista)
                }else{
                    let listaConStock = lista.filter((item) => item.stock > 0 )
                    setProductos(listaConStock)
                }
                setConsultaVacia(false)
                setLoading(false)
            }
            else{
                setConsultaVacia(true)
                setTitulo("Ups...")
            }
        })
        .catch(()=>{
            console.log("algo salio mal")
        })  
    },[id,admin]);


    return(
        <>
        <CssBaseline />
        <Container >
            <div className="ItemListContainer">
                <h2 style={estiloItemListContainer}>{titulo}</h2>
                {consultaVacia? <h3>No se econtraron items en esta categoria</h3>
                :<ItemList loading={loading} productos={productos}></ItemList>}
            </div>
        </Container>
        
        </>
    )
}
