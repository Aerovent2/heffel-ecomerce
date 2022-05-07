import { Grid } from "@mui/material";
import Ventas from "../components/Ventas"




const VentasList =({ventas, usuarios})=>{
    
const datosVenta=ventas.map((venta)=>{
    let usuario = usuarios.find(usuario =>usuario.id === venta.idComprador)
    return ({...usuario,...venta})
})

    return(
        
        datosVenta.map((venta)=>{
            return (
            <Grid item xs key={venta.id} >
                <Ventas usuario={venta} venta={venta}></Ventas>
            </Grid>
            )
        })
        
        
    ) 
}

export default VentasList