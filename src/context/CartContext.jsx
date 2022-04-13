import { createContext, useState, useEffect } from "react";
export const contexto = createContext();
const {Provider} = contexto;



const CustomProvider = ({children})=>{
    const [itemsCarrito,setItemsCarrito] =useState([])
    const [sumaCarrito,setSumaCarrito] =useState(0)

    useEffect(() => {
        cantidadItems()
    }, [itemsCarrito])

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
        let actualizado =itemsCarrito.filter((item) => item.id !== Number(idCarrito) )
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
    };

    const values={itemsCarrito,agregarItem,sumaCarrito,borrarCarrito,quitarItem}
    
    return (<Provider value={values} >
        {children}
    </Provider>)
}

export default CustomProvider