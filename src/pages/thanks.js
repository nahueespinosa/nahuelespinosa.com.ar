import React from 'react'
import { Helmet } from 'react-helmet'
import Footer from '../components/Footer'

const ThanksPage = (props) => (
    <div>
        <Helmet>
            <title>Nahuel Espinosa | Thanks!</title>
            <meta name="description" content="Thanks Page" />
        </Helmet>

        <div id="wrapper">
            <div id="main" className="alt">
                <section id="one">
                    <div className="inner">
                        <header className="major">
                            <h1>Thanks!</h1>
                        </header>
                        <p>Thank you for your message. I will reply as soon as possible.</p>
                        <a href="/" className="button">Return to home page</a>.
                    </div>
                </section>
            </div>
            <Footer />
        </div>
    </div>
)

export default ThanksPage