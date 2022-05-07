import React ,{useEffect, useState}from 'react'
import { Box,CircularProgress } from "@mui/material";
import { db } from '../db/firebase';
import {getDocs,collection} from "firebase/firestore"

import VentasList from '../components/VentasList';

const VentasContainer = () => {
    
    const[loading,setLoading]=useState(true)
    const[ventas,setVentas]=useState([])
    const[usuarios,setUsuarios]=useState([])
   

    useEffect(()=>{
        const coleccionVentas = collection(db,"ventas");
        const coleccionUsers = collection(db,"usuarios");
        getDocs(coleccionVentas)
        .then((result)=>{
            const docs =   result.docs
            if(docs.length >0){
                const lista = docs.map(venta =>{
                    const id = venta.id
                    const ventas = {
                        id,...venta.data()
                    }
                    return ventas
                })
                setVentas(lista)
            }
        })
        .catch((error)=>{
            console.log(error)
        })
        getDocs(coleccionUsers)
        .then((result)=>{
            const docs =  result.docs
            const users = docs.map(usuario=>{
                const id= usuario.id
                const user = {id,...usuario.data()}
                return user
            })
            setUsuarios(users)
            })
        .catch((error)=>{
            console.log(error)
        })
setLoading(false)
    },[]);


  return(

      loading ?
                    <Box sx={{ display: 'flex'}}>
                        <CircularProgress size={400}/>
                    </Box> 
      :<VentasList  usuarios={usuarios} ventas={ventas}></VentasList>
  ) 

}

export default VentasContainer
