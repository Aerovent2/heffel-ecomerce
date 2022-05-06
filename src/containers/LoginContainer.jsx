import React, { useState} from 'react';
import {  Button } from '@mui/material';
import Login from '../components/Login';
import Registro from '../components/Registro';




const LoginContainer = () => {


    const [registrado,setRegistrado]=useState(false)
  return (<>
    {registrado? <Login />:<Registro></Registro> }

    <Button type="button"  variant="outlined" onClick={()=>{setRegistrado(!registrado)}}>{registrado? "No tienes Cuenta?":"Ya te registraste?"}</Button>
  </>)
}

export default LoginContainer