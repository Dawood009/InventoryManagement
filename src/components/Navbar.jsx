import {Link} from 'react-router-dom'
import  '../App.css'

export const Navbar = () =>{
    return ( 
    <div className='navbar'>
    <Link to="/"><h3 className='route'>Home</h3></Link>
    <Link to="/addinventory "><h3 className='route'>Add Inventory</h3></Link>
    </div>
    )
}