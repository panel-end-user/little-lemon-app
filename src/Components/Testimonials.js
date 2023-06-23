import './styles/testimonials.css'
import profileimage from '../Images/icons_assets/profile.png'

function Testimonials() {
    return (
        <div id="testimonials">
            <section className='flexcontainer'>
                <h1>Testimonials</h1>
            </section>
            <section id='reviews' className='flexcontainer'>
                <article>
                    <h4>Name</h4>
                    <img src={profileimage} alt='profile placeholder' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam consectetur consequat magna, ut ultricies nulla lobortis sed.</p>
                </article>
                <article>
                    <h4>Name</h4>
                    <img src={profileimage} alt='profile placeholder' />
                    <p>Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Cras eu mi augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </article>
                <article>
                    <h4>Name</h4>
                    <img src={profileimage} alt='profile placeholder' />
                    <p>Nullam vulputate, quam at pharetra tincidunt, quam mi euismod magna, gravida pharetra elit erat ac nisl. Aenean et ligula imperdiet arcu tempus eleifend.</p>
                </article>
                <article>
                    <h4>Name</h4>
                    <img src={profileimage} alt='profile placeholder' />
                    <p>Duis ex leo, sollicitudin varius eleifend id, porttitor vel eros. Nulla facilisi.</p>
                </article>
            </section>
        </div>
    )
}

export default Testimonials;