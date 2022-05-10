import React from  'react'
import {Container} from '@mui/material';

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ListItem from '@mui/material/ListItem';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import HomeIcon from '@mui/icons-material/Home';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneIcon from '@mui/icons-material/Phone';

const Ventas = ({venta}) => {

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (

    <Container>
      <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Fecha :{`${venta.date.toDate().getDate()}-${venta.date.toDate().getMonth()}-${venta.date.toDate().getFullYear()}`} 
              </ListSubheader>
            }
          >
            <ListItem>
              <ListItemIcon>
                <EmojiPeopleIcon />
              </ListItemIcon>
              <ListItemText primary={venta.nombre} />
            </ListItem>
        
            <ListItemButton onClick={handleClick}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Detalles" />
              {open ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                {venta.items.map( (item,index)=>{
                    return (
                      <ListItem key={index} sx={{ pl: 4 }}>
                        <ListItemIcon>
                          <ArrowRightIcon />
                        </ListItemIcon>
                        <ListItemText primary={`${item.cantidad}-${item.item}-$${item.precio}`}/>
                      </ListItem>)}
                )}
                <ListItem sx={{ pl: 4 }}>
                    <ListItemIcon>
                          <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${venta.direccion}`}/>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemIcon>
                          <AlternateEmailIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${venta.correo}`}/>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemIcon>
                          <PhoneIcon />
                    </ListItemIcon>
                    <ListItemText primary={`${venta.telefono}`}/>
                </ListItem>
                <ListItem sx={{ pl: 4 }}>
                    <ListItemIcon>
                          <AttachMoneyIcon />
                    </ListItemIcon>
                    <ListItemText primary={`Total $${venta.total}`}/>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Container>)
}

        

export default Ventas