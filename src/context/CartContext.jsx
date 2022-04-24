import { createContext, useState, useEffect } from "react";
import { addDoc, collection, serverTimestamp,updateDoc,doc,getDoc } from 'firebase/firestore';
import { db } from '../db/firebase';

export const contexto = createContext();
const {Provider} = contexto;


const CustomProvider = ({children})=>{
    const [itemsCarrito,setItemsCarrito] =useState([])
    const [sumaCarrito,setSumaCarrito] =useState(0)
    const [datosIngresados, setDatosIngresados] = useState(false)
    const [idCompra, setIdCompra] = useState("")
    const [comprador, setComprador] = useState("")

    

    const datosComprador =(valores)=>{
                
        setComprador({
            nombre:valores.nombre,
            email:valores.correo,
            direccion:valores.direccion,
            telefono:valores.telefono})
        setDatosIngresados(true)
        if (window.location.pathname === "/login"){window.history.back()};
    }

    useEffect(() => {
        cantidadItems()
    }, [itemsCarrito])


    const finalizarCompra = ()=>{
        if(datosIngresados){
            const ventaCollection = collection(db, "ventas");
                    addDoc(ventaCollection,{comprador,items:itemsCarrito,date:serverTimestamp(),total:sumaCarrito.precio})
                    .then(result =>{
                        setIdCompra(result.id)
                        actualizarStock()
                            })
        }
    }

    const actualizarStock =()=>{
        itemsCarrito.forEach(item => {
            const orderDoc= doc(db,"productos",item.id)
            getDoc(orderDoc).then((snapshot)=>{
                let productoBuscado = {id:snapshot.id, ...snapshot.data()}
                let nuevoStock= productoBuscado.stock - item.cantidad
                updateDoc (orderDoc,{stock:nuevoStock})
                })

        })
        
    }
    const agregarItem = (item)=>{
        if (itemExiste(item.id)){
            const index = itemsCarrito.findIndex(itemE => itemE.id ===item.id)
            const modificado =[...itemsCarrito]
            modificado[index].cantidad= modificado[index].cantidad +item.cantidad
            setItemsCarrito(modificado)
        }
        else{
            setItemsCarrito([...itemsCarrito,item])  
        }
    };

    const quitarItem =(idCarrito)=>{
        let actualizado =itemsCarrito.filter((item) => item.id !== idCarrito )
        setItemsCarrito(actualizado)
    };

    const cantidadItems =()=>{
        let cantidad= 0
        let sumaPrecio = 0
        itemsCarrito.forEach(item => {
            cantidad = cantidad +item.cantidad;
            sumaPrecio = sumaPrecio +(item.cantidad * item.precio)
        });
        setSumaCarrito({cantidad:cantidad,precio:sumaPrecio})
        return sumaCarrito
    };

    const itemExiste =(id)=>{
        let encontrado = itemsCarrito.find(item =>item.id === id)
        if (encontrado !== undefined){
            return true
        }
        else{   
            return false}
    }
    const borrarCarrito= ()=>{
        setItemsCarrito([])
        setIdCompra("")
    };

    const values={
        itemsCarrito,
        agregarItem,
        sumaCarrito,
        borrarCarrito,
        quitarItem,
        finalizarCompra,
        datosIngresados,
        comprador,
        datosComprador,
        idCompra}
    
    return (<Provider value={values} >
        {children}
    </Provider>)
}

export default CustomProvider