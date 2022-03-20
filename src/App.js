import React from "react";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./components/ItemListContainer";

const App = ()=>{
  return(<div className="main" > 
<NavBar/>

<ItemListContainer color="aquamarine" tamanio={48} greeting="Bienvenido bla bla bla"/>
</div>)
}

export default App