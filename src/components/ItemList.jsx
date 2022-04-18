import { Grid } from "@mui/material";
import Item from "./Item";
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';



const ItemList =({productos, loading})=>{
    
    return(
        <Grid container spacing={2} justify="center">
        {loading ? <Box sx={{ display: 'flex'}}>
                        <CircularProgress size={400}/>
                    </Box> 
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