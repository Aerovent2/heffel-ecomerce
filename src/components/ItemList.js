import Item from "./Item";

const ItemList =({productos, loading})=>{
    
    return(
        loading ? <h2>Cargando .....</h2> 
        :productos.map((element)=>{
        return <Item id={element.id} imagen={element.pictureUrl} titulo={element.title} descripcion={element.description} precio={element.price}></Item>
        })
        
    )
}

export default ItemList