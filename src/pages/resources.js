import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import resources from '../../data/resources'

const ResourcesPage = (props) => (
    <Layout>
        <Helmet>
            <title>Nahuel Espinosa | Resources</title>
            <meta name="description" content="Resources Page" />
        </Helmet>

        <Banner title="Resources" sectionStyle="style1">
            <p>Stuff I found on the internet.</p>
        </Banner>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <p>Here is a list of resources from the internet that I don't think are widely known (some of them may be). I won't spend much time classifying them, there may be articles, entire websites, blogs, forums, tools and basically anything that I think is worth sharing.</p>
                    <p>Since I work as a professor, I found a couple of these looking for good quality learning materials for my students. To be honest, most of them come from random interesting tweets and reddit posts that come my way.</p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    <div className="grid-wrapper">
                        {resources.map((resource, index) => (
                            <div className="box col-4" data-sal="zoom-in" data-sal-delay={300*(index%3)} data-sal-easing="ease">
                                <h3>{resource.title}</h3>
                                <p><a href={resource.link}>{resource.link}</a></p>
                                <p>{resource.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>

    </Layout>
)

export default ResourcesPage