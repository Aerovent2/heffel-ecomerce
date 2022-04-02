import { Grid } from "@mui/material";
import Item from "./Item";

const ItemList =({productos, loading})=>{
    
    return(
        <Grid container spacing={2} justify="center">
        {loading ? <h2>Cargando .....</h2> 
        :productos.map((producto)=>{
        return (
            <Grid item xs key={producto.id} >
                <Item  item={producto}></Item>
            </Grid>
        )
        })}
        </Grid>
    )
}

export default ItemList