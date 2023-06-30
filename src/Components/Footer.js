import './styles/footer.css'
import {Link} from 'react-router-dom'
import lemonlogo from '../Images/icons_assets/lemonlogo.png'

function Footer() {
    return (
        <div id='footersection'>
            <footer className="flexcontainer">
                <img src={lemonlogo} width='100px' alt="Little Lemon logo." />
                <section>
                    <nav>
                        <h3>Navigation</h3>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            <li><Link to='/'>About</Link></li>
                            <li><Link to='/'>Menu</Link></li>
                            <li><Link to='/booking'>Reservations</Link></li>
                            <li><Link to='/'>Order Online</Link></li>
                            <li><Link to='/'>Login</Link></li>
                        </ul>
                    </nav>
                </section>
                <section>
                    <h3>Contact</h3>
                    <ul>
                        <li>Address</li>
                        <li>Phone Number</li>
                        <li>Email</li>
                    </ul>
                </section>
                <section>
                    <h3>Social Media</h3>
                    <ul>
                        <li><p>Social 1</p></li>
                        <li><p>Social 2</p></li>
                        <li><p>Social 3</p></li>
                    </ul>
                </section>
            </footer>
        </div>
    )
}

export default Footer;