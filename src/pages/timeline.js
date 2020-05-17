import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'
import Timeline from '../components/Timeline'

import events from '../../data/events'

const TimelinePage = (props) => (
    <Layout>
        <Helmet>
            <title>Nahuel Espinosa | Timeline</title>
            <meta name="description" content="Timeline Page" />
        </Helmet>

        <Banner title="Timeline" sectionStyle="style3">
            <p>A timeline is a display of a list of events in chronological order <br />
            (according to <a href="https://en.wikipedia.org/wiki/Timeline">Wikipedia</a>)</p>
        </Banner>

        <div id="main" className="alt style3">
            <section id="one">
                <div className="inner">
                    <p>I thought it would be nice to have a timeline of my career, so here it is.</p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <Timeline events={events}/>
                </div>
            </section>
        </div>

    </Layout>
)

export default TimelinePage