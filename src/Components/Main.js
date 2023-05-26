import restauranfood from '../Images/icons_assets/restauranfoodedit.jpg';

function Main() {
    return (
        <main>
            <section id="intro" className="flexcontainer">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
                    <button>Reserve a Table</button>
                </article>
                <img src={restauranfood} width="367px" alt="An image of a restaurant worker holding food."></img>
            </section>
            <section id="specialsheader" className="flexcontainer">
                <h1>Specials</h1>
                <button>Online Menu</button>
            </section>
            <section id="specials" className="flexcontainer">
                <article>
                    <img src="" alt=""></img>
                    <h3>Article 1</h3>
                    <p>Article description.</p>
                </article>
                <article>
                    <img src="" alt=""></img>
                    <h3>Article 2</h3>
                    <p>Article description.</p>
                </article>
                <article>
                    <img src="" alt=""></img>
                    <h3>Article 3</h3>
                    <p>Article description.</p>
                </article>
            </section>
            <section id="testimonialsheader" className="flexcontainer">
                <h1>Testimonials</h1>
            </section>
            <section id="testimonials" className="flexcontainer">
                <article>
                    <h3>Article 1</h3>
                </article>
                <article>
                    <h3>Article 2</h3>
                </article>
                <article>
                    <h3>Article 3</h3>
                </article>
                <article>
                    <h3>Article 4</h3>
                </article>
            </section>
        </main>
    )
}

export default Main;