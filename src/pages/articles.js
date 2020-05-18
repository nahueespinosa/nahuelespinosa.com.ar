import React from 'react'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const ArticlesPage = (props) => (
    <Layout lang="en">
        <Helmet>
            <title>Nahuel Espinosa | Articles</title>
            <meta name="description" content="Articles Page" />
        </Helmet>

        <Banner title="Articles" sectionStyle="style4">
            <p>Stuff I didn't find on the internet (sort of)</p>
        </Banner>

        <div id="main" className="style4">
            <section id="one">
                <div className="inner">
                    <p>Some day I'll find the time and energy to write something here. I promise.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default ArticlesPage