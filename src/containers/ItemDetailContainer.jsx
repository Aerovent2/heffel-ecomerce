import {useState, useEffect} from 'react'
import ItemDetail from "../components/ItemDetail"
import { useParams } from 'react-router-dom'


const ItemDetailContainer = ()=>{
    const {id} = useParams()
    const idProducto = parseInt(id)
    const [producto ,setProducto]=useState({});
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
            fetch("https://mocki.io/v1/f012e37d-4d26-49ff-914c-1d09bc179c8b")
            .then((data)=>{
                const dataParseada = data.json();
                return dataParseada
            })
            .then((data)=>{
            
                const productoFiltrado = data.filter(producto => producto.id === idProducto)
                
                setProducto(productoFiltrado[0])
            
            })
            .catch(()=>{
                console.log("error en promesa")
            })
            
            setLoading(false)
    },[idProducto]);
    
    return(
            loading ? <h2>Cargando .....</h2> 
            :<ItemDetail key={producto.id} item={producto}></ItemDetail>
)}

export default ItemDetailContainer