import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



const ItemDetail = ({id, imagen, titulo, descripcion, precio})=>{
    return(
        <div key={id}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {titulo}
                    </Typography>
                    <img src={imagen} alt="imagen no disponible"></img>
                    <Typography variant="h5" component="div">
                        {descripcion}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        ${precio}
                    </Typography>
                    </CardContent>
                <CardActions>
                    <Button>
                        Aca iria item count supongo
                    </Button>
                </CardActions>
            </Card>
        </div>
    )
}

export default ItemDetail