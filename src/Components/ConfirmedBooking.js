import './styles/confirmedbooking.css'
import { Link } from 'react-router-dom'
import restaurant from '../Images/icons_assets/restaurant.jpg'

function ConfirmedBooking() {
    return (
        <div id='confirmedbooking'>
            <div className='flexcontainer'>
                <section>
                    <h1>Your booking has been confirmed!</h1>
                    <img src={restaurant} alt='Little Lemon outdoor dining' />
                    <Link to='/'>
                        <button>Return Home</button>
                    </Link>
                </section>
            </div>
        </div>
    )
}

export default ConfirmedBooking