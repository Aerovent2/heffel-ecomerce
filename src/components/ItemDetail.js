import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';



const ItemDetail = ({item})=>{
    return(
        <Container>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        {item.title}
                    </Typography>
                    <img src={item.pictureUrl} alt="imagen no disponible"></img>
                    <Typography variant="h5" component="div">
                        {item.description}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        ${item.price}
                    </Typography>
                    </CardContent>
                <CardActions>
                    <Button>
                        Aca iria item count supongo
                    </Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default ItemDetail