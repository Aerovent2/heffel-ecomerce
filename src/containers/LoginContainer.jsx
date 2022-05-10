import React, { useState} from 'react';
import {  Button,Container } from '@mui/material';
import Login from '../components/Login';
import Registro from '../components/Registro';




const LoginContainer = () => {


    const [registrado,setRegistrado]=useState(false)
  return (<>
    {!registrado? <Login />:<Registro></Registro> }
    <Container>
      <Button type="button"  variant="outlined" onClick={()=>{setRegistrado(!registrado)}}>{!registrado? "No tienes Cuenta?":"Ya te registraste?"}</Button>
    </Container>
    
  </>)
}

export default LoginContainer