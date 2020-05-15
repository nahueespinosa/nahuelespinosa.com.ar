import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const Timeline = (props) => (
    <Layout>
        <Helmet>
            <title>Nahuel Espinosa | Resources</title>
            <meta name="description" content="Timeline Page" />
        </Helmet>

        <Banner title="Timeline" sectionStyle="style3">
            <p>A display of a list of events in chronological order <br />
            (according to Wikipedia)</p>
        </Banner>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <p>I thought it would be fun to make a timeline of my career, so here it is.</p>
                    <p><i>Or will be...</i></p>
                </div>
            </section>
        </div>

    </Layout>
)

export default Timeline