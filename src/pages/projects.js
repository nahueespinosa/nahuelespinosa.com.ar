import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import project01 from '../assets/images/project01.jpg'
import project02 from '../assets/images/project02.gif'
import project03 from '../assets/images/project03.jpg'
import project04 from '../assets/images/project04.jpg'

const ProjectsPage = (props) => (
    <Layout>
        <Helmet>
            <title>Nahuel Espinosa | Projects</title>
            <meta name="description" content="Projects Page" />
        </Helmet>

        <Banner title="Projects" sectionStyle="style2">
            <p>This is a selection of projects and technologies <br />
            I've used throughout the years.</p>
        </Banner>

        <div id="main">
            <section id="one">
                <div className="inner">
                    <p>In this selection I tried to include the most significant projects I've participated in or created on my own.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img className="image" src={project01} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>My personal website</h3>
                            </header>
                            <p>Well, this one. This webpage was developed using Gatsby (React, node.js) from <a href="https://github.com/codebushi/gatsby-starter-forty">this starter</a>. <br/>
                            I adapted the theme to my needs and added/modified various componentes (<Link to="/timeline#two">Timeline</Link>, Banner).</p>
                            <p>I'm planning to add support for various languages. Source code is available on GitHub.</p>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><a href="https://github.com/nahueespinosa/my-site" className="button">Source Code</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={project02} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Visual Graph Search</h3>
                            </header>
                            <p>This is a game that allows you to visualize concepts and play with search algorithms for graph data structures. The interface is implemented with PyGame, and allows you to draw walls and select the start and end positions. I started this project after finishing the course <a href="https://github.com/nahueespinosa/ai50">"Introduction to Artificial Intelligence"</a> from <a href="https://cs50.harvard.edu/ai/2020/">CS50</a>.</p>
                            <p>There is just one "solver" class with a generic search method and different types of frontier yield different behaviours. Source code is available on GitHub.</p>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><a href="https://github.com/nahueespinosa/visual_graph_search" className="button">Source Code</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={project03} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>sAPI port for Blue Pill board</h3>
                            </header>
                            <p>Port sAPI library to STM32F103C8 Blue Pill board. It works as a HAL (Hardware Abstraction Layer) for microcontrollers used in the <a href="http://www.proyecto-ciaa.com.ar/">project CIAA</a>.</p>
                            <p>It provides a good entry point for high school students to approach the embedded systems world.</p>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><a href="https://github.com/nahueespinosa/sapi_bluepill" className="button">Source Code</a></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={project04} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Baseboard for STM32F4DISCOVERY</h3>
                            </header>
                            <p>PCB design of a baseboard for <a href="https://www.st.com/en/evaluation-tools/stm32f4discovery.html">STM32F4DISCOVERY development kit</a>. It included the following peripherals: potentiometer, keyboard, LCD display, encoder, RGB LED, piezoelectric buzzer, isolated outputs (optocoupler), SD conector, ESP8266, 4-20mA analog inputs.</p>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
        </div>

    </Layout>
)

export default ProjectsPage