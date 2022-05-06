import React from 'react'
import { doc, updateDoc,deleteDoc } from 'firebase/firestore';
import { getStorage, ref ,deleteObject} from "firebase/storage";
import {db,app} from '../db/firebase';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  Button, Container } from '@mui/material';



function ModificaProductos({item}) {

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

    const modificar =  (valores)=>{
		const modifDoc= doc(db,"productos",item.id)
                updateDoc(modifDoc,{
                                price:valores.price,
                                stock:valores.stock})
                    .then(result =>{
						window.history.back()
                    }) 
    }

	const eliminar = ()=>{
		const storage = getStorage(app);
        const storageRef = ref(storage, `img/products/${item.name}`);
		deleteDoc(doc(db,"productos",item.id)).then(()=>{
			deleteObject(storageRef).then(() => {
				window.history.back()
				})
		})
	} 
    return (
    
        <Container>
			<Formik
				initialValues={{
                    stock:item.stock,
                    price:item.price,
				}}
				validate={(valores) => {
					let errores = {};

                    if(!valores.price){
						errores.price = 'Por favor ingresa el precio'
					} else if(/^[09][0-9]{1,7}$/.test(valores.price)){
						errores.price = 'El precio  debe ser solo numeros'
					}else if(valores.price <= 0){
						errores.price = 'Ingresa un precio valido'
					}

                    if(!valores.stock){
						errores.stock = 'Por favor ingresa el stock'
					} else if(/^[09][0-9]{1,7}$/.test(valores.stock)){
						errores.stock = 'El stock  debe ser solo numeros'
					}else if(valores.stock <= 0){
						errores.stock = 'Ingresa un stock valido'
					}
					return errores;
				}} 
				onSubmit={(valores) => {
                    modificar(valores)
                    
				}}
			>
				{( {errors, setFieldValue} ) => (
					<Form className="formulario">
                        <div style={estiloDiv}>
							<label htmlFor="title"style={estiloLabel}>Nuevo Stock</label>
							<Field
								type="number" 
								id="stock" 
								name="stock" 
							/>
							<ErrorMessage name="stock" component={() => (<div style={estiloError}>{errors.stock}</div>)} />
						</div>
                        <div style={estiloDiv}>
							<label htmlFor="title"style={estiloLabel}>Nuevo Precio</label>
							<Field
								type="number" 
								id="price" 
								name="price" 
							/>
							<ErrorMessage name="price" component={() => (<div style={estiloError}>{errors.price}</div>)} />
						</div>

						<Button sx={{m:3}} variant="contained" type="submit" style={estiloDiv}>Actualizar</Button>
						<Button sx={{m:3}} variant="contained"color="error" style={estiloDiv} onClick={eliminar}>Eliminar</Button>
					</Form>
				)}
			</Formik>
		</Container>
    )
}

export default ModificaProductos