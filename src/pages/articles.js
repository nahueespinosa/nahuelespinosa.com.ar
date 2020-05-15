import React from 'react'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import pic08 from '../assets/images/pic08.jpg'
import pic09 from '../assets/images/pic09.jpg'
import pic10 from '../assets/images/pic10.jpg'

const ArticlesPage = (props) => (
    <Layout>
        <Helmet>
            <title>Nahuel Espinosa | Articles</title>
            <meta name="description" content="Articles Page" />
        </Helmet>

        <Banner title="Articles" sectionStyle="style4">
            <p>Stuff I didn't find on the internet (sort of)</p>
        </Banner>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>Some day I'll find the time and energy to write something here. I promise.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default ArticlesPage