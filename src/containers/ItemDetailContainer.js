import {useState, useEffect} from 'react'
import ItemDetail from "../components/ItemDetail"



const ItemDetailContainer = ()=>{
    
    const [producto ,setProducto]=useState({});
    const [loading,setLoading]=useState(true);

    useEffect(()=>{
        setTimeout(()=>{
            fetch("https://mocki.io/v1/5ab1f964-59b1-4100-bbc6-622e1a3b434b")
            .then((data)=>{
                const dataParseada = data.json();
                return dataParseada
            })
            .then((data)=>{
                console.log(data)
                setProducto(data)
            })
            .catch(()=>{
                console.log("error en promesa")
            })
            
            setLoading(false)
        },4000);
    },[]);
    
    return(
            loading ? <h2>Cargando .....</h2> 
            :<ItemDetail key={producto.id} imagen={producto.pictureUrl} titulo={producto.title} descripcion={producto.description} precio={producto.price}></ItemDetail>
)
    
}

export default ItemDetailContainer