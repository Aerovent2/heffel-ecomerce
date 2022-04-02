import React from "react";
import NavBar from "./components/NavBar";
import { ItemListContainer } from "./containers/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer"

const App = ()=>{
  return(<div className="main" > 
<NavBar/>

<ItemListContainer color="aquamarine" tamanio={48} greeting="Bienvenido"/>
<ItemDetailContainer></ItemDetailContainer>
</div>)
}

export default App