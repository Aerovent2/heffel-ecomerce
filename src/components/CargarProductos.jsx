import React from 'react'
import { addDoc, collection } from 'firebase/firestore';
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { app,db} from '../db/firebase';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {  Button, Container } from '@mui/material';


function CargarProductos() {


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
        const archivo = valores.file;
        const storage = getStorage(app);
        const storageRef = ref(storage, `img/products/${archivo.name}`);

        uploadBytes(storageRef, archivo).then((snapshot) => {
            const link = getDownloadURL(storageRef)
            link.then((url)=>{
                let urlImagen = url;
                const nuevoCollection = collection(db, "productos");
                addDoc(nuevoCollection,{title:valores.title,
                                pictureUrl:urlImagen,
                                category:valores.category,
                                price:valores.price,
                                description:valores.desc,
								name:archivo.name,
                                stock:valores.stock,})
                    .then(result =>{
                        console.log(`producto cargado con exito`, result.id)
						window.history.back()
                    }) 
            })
        })

    }


    return (
    
        <Container>
			<h1>Cargar Nuevo Producto</h1>
			<Formik
				initialValues={{
					title: '',
					desc: '',
                    stock:'',
                    category:'',
                    price:'',
                    file:''
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
                    if(!valores.file){
						errores.file = 'Por favor ingresa una imagen'
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
							<label htmlFor="title"style={estiloLabel}>Titulo</label>
							<Field
								type="text" 
								id="title" 
								name="title" 
								placeholder="producto"
							/>
							<ErrorMessage name="title" component={() => (<div style={estiloError}>{errors.title}</div>)} />
						</div>

                        <div style={estiloDiv}>
							<label htmlFor="desc"style={estiloLabel}>Descripcion</label>
							<Field
								type="text" 
								id="desc" 
								name="desc" 
								placeholder="descripcion"
							/>
							<ErrorMessage name="desc" component={() => (<div style={estiloError}>{errors.desc}</div>)} />
						</div>


                        <div style={estiloDiv}>
							<label htmlFor="title"style={estiloLabel}>Categoria</label>
							<Field as="select" 	id="category" name="category" >
								<option value="tintas">Tintas</option>
								<option value="resmas">Resmas</option>
								<option value="perifericos">Perifericos</option>

							</Field>
							<ErrorMessage name="category" component={() => (<div style={estiloError}>{errors.category}</div>)} />
						</div>
                        <div style={estiloDiv}>
							<label htmlFor="title"style={estiloLabel}>Stock</label>
							<Field
								type="number" 
								id="stock" 
								name="stock" 
								placeholder="stock"
							/>
							<ErrorMessage name="stock" component={() => (<div style={estiloError}>{errors.stock}</div>)} />
						</div>
                        <div style={estiloDiv}>
							<label htmlFor="title"style={estiloLabel}>Precio</label>
							<Field
								type="number" 
								id="price" 
								name="price" 
								placeholder="precio"
							/>
							<ErrorMessage name="price" component={() => (<div style={estiloError}>{errors.price}</div>)} />
						</div>
                        <div style={estiloDiv}>
							<label htmlFor="file"style={estiloLabel}>Imagen</label>
							<input
								type="file" 
								onChange={(e)=>{
                                    setFieldValue("file",e.target.files[0])

                                }}
							/>
							<ErrorMessage name="file" component={() => (<div style={estiloError}>{errors.file}</div>)} />
						</div>

						<Button variant="contained"type="submit" style={estiloDiv}>Cargar</Button>
					</Form>
				)}
			</Formik>
		</Container>
    )
}

export default CargarProductos