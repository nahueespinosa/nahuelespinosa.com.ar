import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'

import config from '../../data/SiteConfig.es'

class HomeIndex extends React.Component {
    render() {

        return (
            <Layout lang="es">
                <Helmet
                    title={config.siteTitle}
                    meta={[
                        { name: 'description', content: config.siteDescription },
                        { name: 'keywords', content: 'sample, something' },
                    ]}
                >
                </Helmet>

                <Banner title="Hola" sectionStyle="major">
                    <p>Soy un ingeniero en electrónica y desarrollador de software <br />
                    apasionado por la informática y temas relacionados.</p>
                    <ul className="actions">
                        <li><a href="#one" className="button next scrolly">Comenzar</a></li>
                    </ul>
                </Banner>
                
                <div id="main">
                    <section id="one" className="tiles">
                        <article style={{backgroundImage: `url(${pic01})`}}>
                            <header className="major">
                                <h3>Recursos</h3>
                                <p>Cosas que encontré en internet</p>
                            </header>
                            <Link to="/es/resources" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic02})`}}>
                            <header className="major">
                                <h3>Proyectos</h3>
                                <p>Una selección de proyectos y tecnologías <br />
                                que usé a lo largo de los años</p>
                            </header>
                            <Link to="/es/projects" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic03})`}}>
                            <header className="major">
                                <h3>Línea de tiempo</h3>
                                <p>Una línea de tiempo es una lista de eventos en orden cronológico <br />
                                (según Wikipedia)</p>
                            </header>
                            <Link to="/es/timeline" className="link primary"></Link>
                        </article>
                        <article style={{backgroundImage: `url(${pic04})`}}>
                            <header className="major">
                                <h3>Artículos</h3>
                                <p>Cosas que no encontré en internet (o algo así)</p>
                            </header>
                            <Link to="/es/articles" className="link primary"></Link>
                        </article>
                    </section>
                </div>

            </Layout>
        )
    }
}

export default HomeIndex