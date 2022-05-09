import React, {useContext, useState} from 'react';
import {  Button, Typography} from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc} from 'firebase/firestore';
import { db,app } from '../db/firebase';
import { contexto } from '../context/CartContext';
import {  useNavigate } from 'react-router-dom';

const Registro = () => {
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

    const registrar =(valores)=>{
		
		const auth = getAuth(app);
		createUserWithEmailAndPassword(auth, valores.correo, valores.password)
			.then((userCredential) => {
				const user = userCredential.user;
				let usuario={
				correo:valores.correo,
				direccion:valores.direccion,
				nombre:valores.nombre,
				telefono:valores.telefono
				}
				setDoc(doc(db,"usuarios",user.uid),usuario)
					.then (()=>{
						userId(user.uid)
						volver()
					})
					.catch((error) => {
						const errorMessage = error.message;
						setError(`Falló registro: ${errorMessage} `)
					});
			})
			.catch((error) => {
				const errorMessage = error.message;
				setError(`Falló registro:  ${errorMessage}`)
			});
	} 
  return (<>
	
    <Formik
				initialValues={{
					nombre: '',
					correo: '',
                    direccion:'',
                    telefono:'',
					password:''
				}}
				validate={(valores) => {
					let errores = {};

					if(!valores.nombre.trim()){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

                    if(!valores.direccion.trim()){
						errores.direccion = 'Por favor ingresa una direccion'
					} else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.direccion)){
						errores.direccion = 'La direccion debe contener calle y altura'
					}

					if(!valores.correo.trim()){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

                    if(!valores.telefono){
						errores.telefono = 'Por favor ingresa un numero telefonico'
					} else if(/^[09][0-9]{1,7}$/.test(valores.telefono)){
						errores.telefono = 'El numero teltefonico debe ser solo numeros'
					}
					if(!valores.password){
						errores.password = 'Por favor ingresa una contraseña'
					} else if(valores.password < 6){
						errores.password = 'la contraseña debe ser de 6 digitos o mas'
					}

					return errores;
				}}
				onSubmit={(valores) => {
					registrar(valores) 
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
						<div style={estiloDiv}>
							<label htmlFor="nombre"style={estiloLabel}>Nombre</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Juan Perez"
							/>
							<ErrorMessage name="nombre" component={() => (<div style={estiloError}>{errors.nombre}</div>)} />
						</div>
                        <div style={estiloDiv}>
							<label htmlFor="direccion" style={estiloLabel}>Direccion</label>
							<Field
								type="text" 
								id="direccion" 
								name="direccion" 
								placeholder="Av Siempreviva 742"
							/>
							<ErrorMessage name="direccion" component={() => (<div style={estiloError}>{errors.direccion}</div>)} />
						</div>
						<div style={estiloDiv}>
							<label htmlFor="correo" style={estiloLabel}>Correo</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="correo@correo.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div style={estiloError}>{errors.correo}</div>)} />
						</div>
						<div style={estiloDiv}> 
							<label htmlFor="telefono" style={estiloLabel}>Telefono</label>
							<Field
								type="number" 
								id="telefono    " 
								name="telefono" 
								placeholder="3435421354" 
							/>
							<ErrorMessage name="telefono" component={() => (<div style={estiloError}>{errors.telefono}</div>)} />
						</div>
						<div style={estiloDiv}> 
							<label htmlFor="password" style={estiloLabel}>Contraseña</label>
							<Field
								type="password" 
								id="password" 
								name="password" 
								
							/>
							<ErrorMessage name="password" component={() => (<div style={estiloError}>{errors.password}</div>)} />
						</div>
						<Typography color="error" align='center'>{error}</Typography>
						<Button type="submit" variant="contained"  style={estiloDiv}>registrarme</Button>
					</Form>
				)}
			</Formik>
  </>)
}

export default Registro