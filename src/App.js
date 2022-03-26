import React from "react";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer";

const App = ()=>{
  return(<div className="main" > 
<NavBar/>

<ItemListContainer color="aquamarine" tamanio={48} greeting="Bienvenido"/>
</div>)
}

export default App