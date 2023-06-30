import './styles/billboard.css'
import {Link} from 'react-router-dom'
import restaurantfood from '../Images/icons_assets/restaurantfoodedit.jpg';

function Billboard() {
    return (
        <div id="billboard">
            <section className='flexcontainer'>
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <Link to='/booking'>
                        <button>Reserve a Table</button>
                    </Link>
                </article>
                <img src={restaurantfood} alt="A restaurant worker holding food." />
            </section>
        </div>
    )
}

export default Billboard;