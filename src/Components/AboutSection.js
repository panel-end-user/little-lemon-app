import './styles/about.css'
import owners from '../Images/icons_assets/Mario and Adrian b.jpg'

function AboutSection() {
    return (
        <div id="aboutsection">
            <section className="flexcontainer">
                <article>
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel pellentesque nunc, ut fermentum leo. Quisque non tellus fermentum, pulvinar neque non, rhoncus ante. Curabitur non facilisis tellus. Cras lobortis, tortor quis elementum facilisis, justo nisl vestibulum lectus, id hendrerit ipsum massa eu mauris.</p>
                </article>
                <article>
                    <img src={owners} width='100%' alt='Mario and Adrian' />
                </article>
            </section>
        </div>
    )
}

export default AboutSection;