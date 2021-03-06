import React from "react";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer"
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomProvider from "./context/CartContext";
import { CartContainer } from "./containers/CartContainer";
import LoginContainer from "./containers/LoginContainer";
import Logout from "./components/Logout";
import Admin from "./containers/Admin";


const App = ()=>{
  

  return(
    <BrowserRouter>
      <CustomProvider>
        <NavBar/>
        <Routes>
          <Route path="/" element={<ItemListContainer color="aquamarine" tamanio={48} greeting="Bienvenido"/>}/>
          <Route path="/categorias/:id" element={<ItemListContainer color="lightblue" tamanio={35} greeting="categoria"/>}/>
          <Route path="/producto/:id" element={<ItemDetailContainer></ItemDetailContainer>}/>
          <Route path="/cart" element={<CartContainer></CartContainer>}/>
          <Route path="/login" element={<LoginContainer></LoginContainer>}/>
          <Route path="/logout" element={<Logout></Logout>}/>
          <Route path="/admin" element={<Admin></Admin>}/>
          <Route path="*" element={<NotFound></NotFound>}/>
        </Routes>
      </CustomProvider>
    </BrowserRouter>)
}

export default App

