import './styles/specials.css'
import bruschetta from '../Images/icons_assets/bruschetta.svg'
import greeksalad from '../Images/icons_assets/greeksalad.jpg'
import lemondessert from '../Images/icons_assets/lemondessert.jpg'

function Specials() {
    return (
        <div id="specials">
            <section className='flexcontainer'>
                <h1>Specials</h1>
                <button>Online Menu</button>
            </section>
            <section id="cards" className='flexcontainer'>
                <article>
                    <img src={greeksalad} width="350" alt="greek salad and fork" />
                    <h4>Greek Salad</h4>
                    <p>The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                </article>
                <article>
                    <img src={bruschetta} width="350" alt="Bruschetta on wooden platter." />
                    <h4>Bruschetta</h4>
                    <p>Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                </article>
                <article>
                    <img src={lemondessert} width="350" alt="lemon dessert and fork" />
                    <h4>Lemon Dessert</h4>
                    <p>This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.</p>
                </article>
            </section>
        </div>
    )
}

export default Specials;