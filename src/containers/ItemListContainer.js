import ItemCount from "../components/ItemCount"


export const ItemListContainer=({greeting, color, tamanio})=>{//estilos y saludo por props
    const estiloItemListContainer = {
        color,
        fontSize: tamanio,
    }

    const onAdd =(contador)=>{
        console.log(`estas comprando ${contador} productos` )
    }
    return(
        <div className="ItemListContainer">
            <h2 style={estiloItemListContainer}>{greeting}</h2>
            <ItemCount initial={1} stock={10} onAdd={onAdd}></ItemCount>
        </div>
    )
}