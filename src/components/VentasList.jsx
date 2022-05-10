import { Grid } from "@mui/material";
import { useState, useEffect } from "react";
import Ventas from "../components/Ventas"




const VentasList =({ventas, usuarios})=>{
    
    const [ver, setVer]=useState(false)

    const datosVenta=ventas.map((venta)=>{
        let usuario = usuarios.find(usuario =>usuario.id === venta.idComprador)
        return ({...usuario,...venta})
    })
    
    useEffect(() => {
         if (datosVenta !== []){
        setVer(true)
    }
    }, [])
    
   

    return(
       ver ? 
        datosVenta.map((venta)=>{
            return (
            <Grid item xs key={venta.id} >
                <Ventas usuario={venta} venta={venta}></Ventas>
            </Grid>
            )
        })
        : <h3>No hay items</h3>
    ) 
}

export default VentasList