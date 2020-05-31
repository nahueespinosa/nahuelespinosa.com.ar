import React from 'react'
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const ArticlesPage = (props) => (
    <Layout lang="es">
        <SEO title="Nahuel Espinosa | Artículos" lang="es" />

        <Banner title="Artículos" sectionStyle="style4">
            <p>Cosas que no encontré en internet (más o menos).</p>
        </Banner>

        <div id="main" className="style4">
            <section id="one">
                <div className="inner">
                    <p>Al programar y diseñar sistemas con varias tecnologías, muchas veces me encuentro con desafíos, 
                    curiosidades, distintos métodos para resolver problemas y otra serie de cosas que es difícil
                    encontrar bien documentadas.</p>
                    <p>Algún día en el futuro acá debería haber artículos con estos temas que me interesan
                    esperando que sean útiles para alguien más. Por ahora no tuve la combinación de tiempo y energía
                    necesaria para hacerlos.</p>
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <p>This page has an <a href="/articles">english version</a>.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default ArticlesPage