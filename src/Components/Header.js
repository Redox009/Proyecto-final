import NavBar from './NavBar';
import  {Link, NavLink}  from "react-router-dom"
import {Router, Routes} from "react-router-dom"
import ItemListContainer from "../Components/ItemListContainer"


function Header() {
    return (
  
        <header id="main-header">
            <NavLink to="/" router={<ItemListContainer/>}><h4>Macetas Henry</h4></NavLink>
            <NavBar/>
        </header>
    
    )
}

export default Header;