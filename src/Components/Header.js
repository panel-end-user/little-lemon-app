import './styles/header.css'
import { Link } from 'react-router-dom'
import logo from '../Images/icons_assets/Logo .svg'
import hamburger from '../Images/icons_assets/icon _hamburger menu.svg'
import basket from '../Images/icons_assets/Basket.svg'

function Header() {
    return (
        <header>
            <nav>
                <ul id='navigation' className='flexcontainer'>
                    <li id='hamburger'><img src={hamburger} alt='hamburger menu icon' /></li>
                    <Link to='/'>
                        <li id='logo'><img src={logo} alt='Logo' /></li>
                    </Link>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/'>About</Link></li>
                    <li><Link to='/'>Menu</Link></li>
                    <li><Link to='/booking'>Reservations</Link></li>
                    <li><Link to='/'>Order Online</Link></li>
                    <li><Link to='/'>Login</Link></li>
                    <li id='basket'><img src={basket} alt='basket icon' /></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;