import React from 'react'
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const ArticlesPage = (props) => (
    <Layout lang="es">
        <SEO title="Nahuel Espinosa | Artículos" lang="es" />

        <Banner title="Artículos" sectionStyle="style4">
            <p>Cosas que no encontré en internet (o algo así).</p>
        </Banner>

        <div id="main" className="style4">
            <section id="one">
                <div className="inner">
                    <p>Algún día voy a encontrar el tiempo y la energía para escribir algo acá. Lo prometo.</p>
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