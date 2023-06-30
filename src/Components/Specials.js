import './styles/specials.css'
import bruschetta from '../Images/icons_assets/bruschetta.png'
import greeksalad from '../Images/icons_assets/greeksalad.jpg'
import lemondessert from '../Images/icons_assets/lemondessert.jpg'

const specialsData = [
    {
        id: '1',
        img: greeksalad,
        alt: 'greek salad and fork',
        title: 'Greek Salad',
        price: '$12.99',
        description: 'The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.'
    },
    {
        id: '2',
        img: bruschetta,
        alt: 'Bruschetta on wooden platter.',
        title: 'Bruschetta',
        price: '$5.99',
        description: 'Our bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
    },
    {
        id: '3',
        img: lemondessert,
        alt: 'lemon dessert and fork',
        title: 'Lemon Dessert',
        price: '$5.00',
        description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined."
    }
]

const buttonKeys = ['1', '2', '3']

function Specials() {
    return (
        <div id="specials">
            <section className='flexcontainer'>
                <h1>Specials</h1>
                <button>Online Menu</button>
            </section>
            <section id="cards" className='flexcontainer'>
                {
                    specialsData.map(special => {
                        return (
                            <article key={special.id}>
                                <img src={special.img} alt={special.alt} />
                                <div className='flexcontainer2'>
                                    <h4>{special.title}</h4>
                                    <h4 className='price'>{special.price}</h4>
                                </div>
                                <p>{special.description}</p>
                                <button id='vertical'>Order for Delivery</button>
                            </article>
                        )
                    })
                }
            </section>
            <section id='orderbuttons' className='flexcontainer'>
                {
                    buttonKeys.map(key => {
                        return (
                            <div id='horizontal'>
                                <button key={key}>Order for Delivery</button>
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Specials;