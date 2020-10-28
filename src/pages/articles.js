import React from 'react'
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const ArticlesPage = (props) => (
    <Layout lang="en">
        <SEO title="Nahuel Espinosa | Articles" />

        <Banner title="Articles" sectionStyle="style4">
            <p>Stuff I didn't find on the internet (to some extent)</p>
        </Banner>

        <div id="main" className="style4">
            <section id="one">
                <div className="inner">
                    <p>When programming and designing systems with various technologies, many times I find myself with
                    challenges, curiosities, different methods to solve problems and other series of things that are 
                    hard to find well documented.</p>
                    <p>Someday in the future there should be articles on these topics that interest me, hoping they
                    will be useful to someone else. For now I didn't have the combination of time and energy to 
                    make them.</p>
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