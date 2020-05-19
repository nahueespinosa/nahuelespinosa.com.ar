import React from 'react'
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const ArticlesPage = (props) => (
    <Layout lang="en">
        <SEO title="Nahuel Espinosa | Articles" />

        <Banner title="Articles" sectionStyle="style4">
            <p>Stuff I didn't find on the internet (sort of)</p>
        </Banner>

        <div id="main" className="style4">
            <section id="one">
                <div className="inner">
                    <p>Some day I'll find the time and energy to write something here. I promise.</p>
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <p>Esta página tiene una <a href="/es/articles">versión en español</a>.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default ArticlesPage