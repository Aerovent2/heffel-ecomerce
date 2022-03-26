
import logo from "../img/logo.jpg"
import "./NavBar.css";
import CartWidget from "./CartWidget";

const NavBar = ()=>{
    return (
        <div className="NavBar">
            <img src={logo}  alt="logo"/>
            <h1>WS-Web</h1>
            <nav>
                <a href="#">Tintas</a>
                <a href="#">Resmas</a>
                <a href="#">Perifericos</a>
            </nav>
            <CartWidget/>
        </div>
    )
}

export default NavBar 