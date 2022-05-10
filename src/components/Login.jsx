import React, {useContext,useState} from 'react';

import {  Button, Container ,Typography} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from '../db/firebase';
import { contexto } from '../context/CartContext';
import {  useNavigate } from 'react-router-dom';

const Login = () => {
	const {userId} =useContext(contexto)
	const [error,setError]= useState("")
	
	const estiloError={
        color: "#e92b2d",
        fontWeight: "600",
        fontSize: "12px"
    }
    const estiloDiv={
        margin:"20px"
    }
    const estiloLabel ={
        paddingRight:"5px"
    }
	const path = useNavigate()
	const volver = ()=>{
		
		if (window.location.pathname === "/login"){
			path("/")
		}

	}

	const ingresar =(valores)=>{
		const auth = getAuth(app);
		signInWithEmailAndPassword(auth, valores.email, valores.pass)
			.then((userCredential) => {
				const user = userCredential.user;
				userId(user.uid)
				volver()
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(`Falló Autenticacion:   ${errorMessage}`)
			}); 
	}


    return (
		<Container>
			<h1>Ingresa tus Credenciales</h1>
			<Formik
				initialValues={{
					email: '',
					pass:''
				}}
				validate={(valores) => {
					let errores = {};

					if(!valores.email.trim()){
						errores.email = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.email)){
						errores.email = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}
					if(!valores.pass){
						errores.pass = 'Por favor ingresa una contraseña'
					} else if(valores.pass < 6){
						errores.pass = 'la contraseña debe ser de 6 digitos o mas'
					}

					return errores;
				}}
				onSubmit={(valores) => {
					ingresar(valores) 
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<div style={estiloDiv}>
							<label htmlFor="email" style={estiloLabel}>Correo</label>
							<Field
								type="text" 
								id="email" 
								name="email" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="email" component={() => (<div style={estiloError}>{errors.email}</div>)} />
						</div>
						<div style={estiloDiv}> 
							<label htmlFor="pass" style={estiloLabel}>Contraseña</label>
							<Field
								type="password" 
								id="pass" 
								name="pass" 
								
							/>
							<ErrorMessage name="pass" component={() => (<div style={estiloError}>{errors.pass}</div>)} />
						</div>
						<Typography color="error" align='center'>{error}</Typography>
						<Button type="submit" variant="contained" style={estiloDiv}>ingresar</Button>
					</Form>
				)}
			</Formik>

			
			
		</Container>
	);
}

export default Login

