import React from 'react'
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import resources from '../../data/resources.es'

const ResourcesPage = (props) => (
    <Layout lang="es">
        <SEO title="Nahuel Espinosa | Recursos" lang="es"/>

        <Banner title="Recursos" sectionStyle="style1">
            <p>Cosas que encontré en internet.</p>
        </Banner>

        <div id="main" className="alt style1">
            <section id="one">
                <div className="inner">
                    <p>Acá hay una lista de recursos de internet que no creo que sean ampliamente conocidos (algunos podrían ser). No voy a gastar mucho tiempo clasificándolos, puede haber artículos, sitios webs, blogs, foros, herramientas y básicamente cualquier cosa que piense que vale la pensa compartir.</p>
                    <p>Como trabajo como profesor, encontré un par de estos buscando material de aprendizaje de buena calidad para mis estudiantes. Para ser honesto, la mayoría viene de tweets o posts de reddit interesantes que se cruzan por mi camino.</p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <div className="grid-wrapper">
                        {resources.map((resource, index) => (
                            <div className="box col-4" data-sal="zoom-in" data-sal-delay={300*(index%3)} data-sal-easing="ease">
                                <h3>{resource.title}</h3>
                                <p><a href={resource.link}>{resource.link}</a></p>
                                <p>{resource.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <p>This page has an <a href="/resources">english version</a>.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default ResourcesPage