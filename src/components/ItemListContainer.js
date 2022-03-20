
export const ItemListContainer=({greeting, color, tamanio})=>{//estilos y saludo por props
    const estilo = {
        color,
        fontSize: tamanio
    }
    return(
        <div className="ItemListContainer">
            <h2 style={estilo}>{greeting}</h2>
        </div>
    )
}