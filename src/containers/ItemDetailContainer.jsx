import {useState, useEffect} from 'react'
import ItemDetail from "../components/ItemDetail"
import { useParams } from 'react-router-dom'
import { db } from '../db/firebase';
import {doc,getDoc} from "firebase/firestore"



const ItemDetailContainer = ()=>{
    const {id} = useParams()

    const [producto ,setProducto]=useState({});
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        
        const documento = doc(db,"productos",id)

        getDoc(documento).then((snapshot)=>{
            let productoBuscado = {id:snapshot.id, ...snapshot.data()}
            setProducto(productoBuscado)
            setLoading(false)
        })
        .catch(()=>{
            console.log("algo salio mal")
        })  
    },[id]);
    
    return(
            loading ? <h2>Cargando .....</h2> 
            :<ItemDetail key={producto.id} item={producto}></ItemDetail>
)}

export default ItemDetailContainer