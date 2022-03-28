import { green, red } from "@mui/material/colors"

const Button = ({color, text, onClick})=>{
    const estiloButton ={
        backgroundColor : color === "red" ?  "red": color === "blue" ? "blue" : color === "green" ? "green": "gray",
        color :color === "red" ?  "black": color === "blue" ? "white" : color === "green" ? "white": "black",
        borderRadius: 5,
        fontSize: 15,
        height: 25,
    }
    return (
            <button onClick={onClick} style={estiloButton}>
            {text}
        </button>
    )
}

export default Button