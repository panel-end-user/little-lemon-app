import './styles/header.css'
import {Link} from 'react-router-dom'
import logo from '../Images/icons_assets/Logo .svg'
import hamburger from '../Images/icons_assets/icon _hamburger menu.svg'
import basket from '../Images/icons_assets/Basket.svg'

function Header() {
    return (
        <header>
            <nav>
                <ul id='navigation' className='flexcontainer'>
                    <li id='hamburger'><img src={hamburger} alt='hamburger menu icon' /></li>
                    <li><img src={logo} alt='Logo' /></li>
                    <li><Link to='/'>Home</Link></li>
                    <li><p>About</p></li>
                    <li><p>Menu</p></li>
                    <li><Link to='/booking'>Reservations</Link></li>
                    <li><p>Order Online</p></li>
                    <li><p>Login</p></li>
                    <li id='basket'><img src={basket} alt='basket icon' /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;