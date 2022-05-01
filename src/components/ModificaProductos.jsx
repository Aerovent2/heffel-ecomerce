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

    const submitHandler =  (valores)=>{
		const modifDoc= doc(db,"productos",item.id)
                updateDoc(modifDoc,{title:valores.title,
                                category:valores.category,
                                price:valores.price,
                                description:valores.desc,
                                stock:valores.stock})
                    .then(result =>{
                        console.log(`producto actualizado con exito`)
						window.history.back()
                    }) 
    }

	const eliminar = ()=>{
		const storage = getStorage(app);
        const storageRef = ref(storage, `img/products/${item.name}`);
		deleteDoc(doc(db,"productos",item.id)).then(()=>{
			console.log("item borrado")
			deleteObject(storageRef).then(() => {
				console.log("imagen borrada")
				window.history.back()
				})
		})
	} 
    return (
    
        <Container>
			<Formik
				initialValues={{
					title:item.title,
					desc: item.description,
                    stock:item.stock,
                    category:item.category,
                    price:item.price,
                    
				}}
				validate={(valores) => {
					let errores = {};

					if(!valores.title){
						errores.title = 'Por favor ingresa un titulo'
					} 

                    if(!valores.desc){
						errores.desc = 'Por favor ingresa una descripcion'
					}
                    if(!valores.category){
						errores.category = 'Por favor ingresa una categoria'
					}else if(valores.category !== "tintas" & valores.category !== "resmas" & valores.category !== "perifericos"){
						errores.category = 'las categorias solo son (tintas - resmas - perifericos)'
					}

                    if(!valores.price){
						errores.price = 'Por favor ingresa el precio'
					} else if(/^[09][0-9]{1,7}$/.test(valores.price)){
						errores.price = 'El precio  debe ser solo numeros'
					}

                    if(!valores.stock){
						errores.stock = 'Por favor ingresa el stock'
					} else if(/^[09][0-9]{1,7}$/.test(valores.stock)){
						errores.stock = 'El stock  debe ser solo numeros'
					}
					return errores;
				}} 
				onSubmit={(valores) => {
                    submitHandler(valores)
                    
				}}
			>
				{( {errors, setFieldValue} ) => (
					<Form className="formulario">
						<div style={estiloDiv}>
							<label htmlFor="title"style={estiloLabel}>Nuevo Titulo</label>
							<Field
								type="text" 
								id="title" 
								name="title" 
								placeholder="title"
								
							/>
							<ErrorMessage name="title" component={() => (<div style={estiloError}>{errors.title}</div>)} />
						</div>

                        <div style={estiloDiv}>
							<label htmlFor="desc"style={estiloLabel}>Nueva Descripcion</label>
							<Field
								type="text" 
								id="desc" 
								name="desc" 
								placeholder="descripcion"
								
							/>
							<ErrorMessage name="desc" component={() => (<div style={estiloError}>{errors.desc}</div>)} />
						</div>


                        <div style={estiloDiv}>
							<label htmlFor="title"style={estiloLabel}>Nueva Categoria</label>
							<Field
								type="text" 
								id="category" 
								name="category" 
								placeholder="tintas,resmas,perifericos"
								
							/>
							<ErrorMessage name="category" component={() => (<div style={estiloError}>{errors.category}</div>)} />
						</div>
                        <div style={estiloDiv}>
							<label htmlFor="title"style={estiloLabel}>Nuevo Stock</label>
							<Field
								type="number" 
								id="stock" 
								name="stock" 
								placeholder="stock"
								
							/>
							<ErrorMessage name="stock" component={() => (<div style={estiloError}>{errors.stock}</div>)} />
						</div>
                        <div style={estiloDiv}>
							<label htmlFor="title"style={estiloLabel}>Nuevo Precio</label>
							<Field
								type="number" 
								id="price" 
								name="price" 
								placeholder="precio"
								
							/>
							<ErrorMessage name="price" component={() => (<div style={estiloError}>{errors.price}</div>)} />
						</div>


						<Button sx={{m:3}} variant="contained" type="submit" style={estiloDiv}>Cargar</Button>
						<Button sx={{m:3}} variant="contained"color="error" style={estiloDiv} onClick={eliminar}>Eliminar</Button>
					</Form>
				)}
			</Formik>
		</Container>
    )
}

export default ModificaProductos