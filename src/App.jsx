import React from "react";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer"
import Cart from "./components/Cart";
import NotFound from "./components/NotFound";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = ()=>{
  return(
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<ItemListContainer color="aquamarine" tamanio={48} greeting="Bienvenido"/>}/>
        <Route path="/categorias/:id" element={<ItemListContainer color="red" tamanio={48} greeting="categoria"/>}/>
        <Route path="/producto/:id" element={<ItemDetailContainer></ItemDetailContainer>}/>
        <Route path="/cart" element={<Cart></Cart>}/>
        <Route path="*" element={<NotFound></NotFound>}/>
      </Routes>
    </BrowserRouter>)
}

export default App

