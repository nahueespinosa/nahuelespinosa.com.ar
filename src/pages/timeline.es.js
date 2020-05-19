import React from 'react'
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Timeline from '../components/Timeline'

import events from '../../data/events.es'

const TimelinePage = (props) => (
    <Layout lang="es">
        <SEO title="Nahuel Espinosa | Línea de Tiempo" lang="es" />

        <Banner title="Línea de Tiempo" sectionStyle="style3">
            <p>Una línea de tiempo es una lista de eventos en orden cronológico <br />
            (según <a href="https://en.wikipedia.org/wiki/Timeline">Wikipedia</a>).</p>
        </Banner>

        <div id="main" className="alt style3">
            <section id="one">
                <div className="inner">
                    <p>Pensé que sería bueno tener una línea de tiempo de mi carrera, así que acá está.</p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <Timeline events={events}/>
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <p>This page has an <a href="/timeline">english version</a>.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default TimelinePage