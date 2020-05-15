import React from 'react'
import Helmet from 'react-helmet'
import Layout from '../components/layout'

import pic11 from '../assets/images/pic11.jpg'

import resources from '../../data/resources'

const Resources = (props) => (
    <Layout>
        <Helmet>
            <title>Nahuel Espinosa | Resources</title>
            <meta name="description" content="Resources Page" />
        </Helmet>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Resources</h1>
                    </header>
                    <span className="image main"><img src={pic11} alt="" /></span>
                    <p>Here is a list of resources from the internet that I don't think are widely known (some of them may be). I won't spend much time classifying them, there may be articles, entire websites, blogs, forums, tools and basically anything that I think is worth sharing.</p>
                    <p>Since I work as a professor, I found a couple of these looking for good quality learning materials for my students. To be honest, most of them come from random interesting tweets and reddit posts that come my way.</p>

                    <div className="grid-wrapper">
                        {resources.map(resource => (
                            <div className="col-4">
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

export default Resources