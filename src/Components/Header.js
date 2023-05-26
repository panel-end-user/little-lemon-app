import logo from '../Images/icons_assets/Logo .svg';

function Header() {
    return (
        <header className="flexcontainer">
            <img src={logo} alt="Logo"></img>
            <nav>
                <ul className="flexcontainer">
                    <li><a href="/home">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/menu">Menu</a></li>
                    <li><a href="/reservations">Reservations</a></li>
                    <li><a href="/orderonline">Order Online</a></li>
                    <li><a href="/login">Login</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;