import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout lang="en">
                <SEO />

                <Banner title="Hi, I'm Nahuel" sectionStyle="major">
                    <p>I'm an electronics engineer and software developer <br />
                    interested in computer science and related topics.</p>
                    <ul className="actions">
                        <li><a href="/es/" className="button banner">Ir a Versión en Español</a></li>
                    </ul>
                </Banner>
                
                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Resources</h3>
                                <p>Stuff I found on the internet</p>
                            </header>
                            <Link to="/resources" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Projects</h3>
                                <p>A selection of projects and technologies <br />
                                I've used throughout the years</p>
                            </header>
                            <Link to="/projects" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Timeline</h3>
                                <p>A timeline is a display of a list of events in chronological order <br />
                                (according to Wikipedia)</p>
                            </header>
                            <Link to="/timeline" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Articles</h3>
                                <p>Stuff I didn't find on the internet (to some extent)</p>
                            </header>
                            <Link to="/articles" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex