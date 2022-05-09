
import React , {useContext,useState}from 'react'
import { getAuth, signOut } from "firebase/auth";
import { contexto } from '../context/CartContext';
import {  useNavigate } from 'react-router-dom';

const Logout = () => {
    const {userId} =useContext(contexto)
    const [error,setError]= useState("")

    const path = useNavigate()
    const volver = ()=>{
            path("/")
    }
    
    const auth = getAuth();
    signOut(auth).then(() => {
        userId(null)
        volver()
        }).catch((error) => {
            setError(error)
            });
            
  return (
    <div>{error}</div>
  )
}

export default Logout