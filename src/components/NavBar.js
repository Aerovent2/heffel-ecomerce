import "./NavBar.css"
import logo from "../img/logo.jpg"
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const NavBar = ()=>{
    return (
        <div>
            <img src={logo}  alt="logo"/>
            <h1>WS-Web</h1>
            <nav>
                <a href="#">Tintas</a>
                <a href="#">Resmas</a>
                <a href="#">Perifericos</a>
            </nav>
            <ShoppingCartIcon/>
        </div>
        
    )
}

export default NavBar 