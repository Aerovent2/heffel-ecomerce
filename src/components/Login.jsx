import React, {useContext} from 'react';
import { contexto } from '../context/CartContext';
import {  Button, Container } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';


const Login = () => {
    const {datosComprador} =useContext(contexto)
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


    return (
		<Container>
			<Formik
				initialValues={{
					nombre: '',
					correo: '',
                    direccion:'',
                    telefono:''
				}}
				validate={(valores) => {
					let errores = {};

					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

                    if(!valores.direccion){
						errores.direccion = 'Por favor ingresa una direccion'
					} else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.direccion)){
						errores.direccion = 'La direccion debe contener calle y altura'
					}

					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

                    if(!valores.telefono){
						errores.telefono = 'Por favor ingresa un numero telefonico'
					} else if(/^[09][0-9]{1,7}$/.test(valores.telefono)){
						errores.telefono = 'El numero teltefonico debe ser solo numeros'
					}

					return errores;
				}}
				onSubmit={(valores) => {
                    datosComprador(valores)
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
							<label htmlFor="nombre" style={estiloLabel}>Direccion</label>
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
						<Button type="submit" style={estiloDiv}>Continuar</Button>
					</Form>
				)}
			</Formik>
		</Container>
	);
}

export default Login