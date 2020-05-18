import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import Banner from '../components/Banner'

import project01 from '../assets/images/project01.jpg'
import project02 from '../assets/images/project02.jpg'
import project03 from '../assets/images/project03.jpg'
import project04 from '../assets/images/project04.jpg'
import project05 from '../assets/images/project05.jpg'
import project06 from '../assets/images/project06.gif'
import project07 from '../assets/images/project07.jpg'

const ProjectsPage = (props) => (
    <Layout lang="en">
        <Helmet>
            <title>Nahuel Espinosa | Projects</title>
            <meta name="description" content="Projects Page" />
        </Helmet>

        <Banner title="Projects" sectionStyle="style2">
            <p>This is a selection of projects and technologies <br />
            I've used throughout the years.</p>
        </Banner>

        <div id="main" className="style2">
            <section id="one">
                <div className="inner">
                    <p>In this section I've tried to include the most significant projects I've participated in. They are ordered from newest to oldest and I've included some tags to give an idea of the technology involved.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img className="image" src={project07} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>My personal website</h3>
                            </header>
                            <p>This webpage was developed with Gatsby framework (React, node.js) using <a href="https://github.com/codebushi/gatsby-starter-forty">this starter</a>. <br/>
                            I adapted the theme to my needs and added/modified various componentes (<Link to="/timeline#two">Timeline</Link>, Banner).</p>
                            <ul className="actions">
                                <li><a href="https://github.com/nahueespinosa/my-site" className="button icon fa-github">Source Code</a></li>
                            </ul>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><code>Javascript</code></li>
                                <li><code>node.js</code></li>
                                <li><code>React</code></li>
                                <li><code>Gatsby</code></li>
                                <li><code>HTML</code></li>
                                <li><code>CSS</code></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={project06} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Visual graph search</h3>
                            </header>
                            <p>This is a game that allows you to visualize concepts and play with search algorithms for graph data structures. The interface is implemented with PyGame, and allows you to draw walls and select the start and end positions.</p>
                            <p>I started this project after finishing the course <a href="https://github.com/nahueespinosa/ai50">Introduction to Artificial Intelligence</a> from <a href="https://cs50.harvard.edu/ai/2020/">CS50</a>.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/nahueespinosa/visual_graph_search" className="button icon fa-github">Source Code</a></li>
                            </ul>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><code>Python</code></li>
                                <li><code>PyGame</code></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={project05} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>sAPI port for Blue Pill board</h3>
                            </header>
                            <p>Port sAPI library to <a href="https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill.html">STM32F103C8 Blue Pill board</a>. It works as a HAL (Hardware Abstraction Layer) for microcontrollers used in the <a href="http://www.proyecto-ciaa.com.ar/">project CIAA</a>.</p>
                            <p>It provides a good entry point for high school students to approach the embedded systems world.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/nahueespinosa/sapi_bluepill" className="button icon fa-github">Source Code</a></li>
                            </ul>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><code>ST Microcontrollers</code></li>
                                <li><code>C</code></li>
                                <li><code>STM32CubeIDE</code></li>
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
                            <p>PCB design of a baseboard for <a href="https://www.st.com/en/evaluation-tools/stm32f4discovery.html">STM32F4DISCOVERY development kit</a>. It includes the following peripherals: potentiometer, keyboard, LCD display, encoder, RGB LED, piezoelectric buzzer, isolated outputs (optocoupler), micro SD socket, ESP8266, 4-20mA analog inputs.</p>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><code>Proteus Design Suite</code></li>
                                <li><code>ST Microcontrollers</code></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={project03} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Energy meter</h3>
                            </header>
                            <p>Design and development of a device capable of measuring electric parameters such as active power, instant voltage and current, power factor and energy.</p>
                            <p>It has internal storage and an integrated web server to access the information in real time. The main chips used were LPC1769, ESP8266 and ATM90E36A. Connectivity: Ethernet, WiFi, Modbus.</p>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><code>LPCOpen</code></li>
                                <li><code>C</code></li>
                                <li><code>FreeRTOS</code></li>
                                <li><code>uIP</code></li>
                                <li><code>Modbus</code></li>
                                <li><code>Altium Designer</code></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={project02} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Vehicle seat control system</h3>
                            </header>
                            <p>Implementation of vehicle seat control system with temepature sensor, heater y presence detector. Two seats connected over a LIN bus, and CAN bus available to communicate with the rest of the vehicle.</p>
                            <p>For the LIN communication we used the UART2 peripheral of the microcontroller with a <a href="http://www.ti.com/lit/ds/symlink/tpic1021.pdf?&ts=1589836790029">TPIC1021DR</a> transceiver. And for the CAN bus we used the <a href="https://www.ti.com/product/SN65HVD1040">SN65HVD1040</a> transceiver.</p>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><code>CMSIS</code></li>
                                <li><code>FreeRTOS</code></li>
                                <li><code>C</code></li>
                                <li><code>LIN</code></li>
                                <li><code>CAN</code></li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section>
                    <img className="image" src={project01} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Vehicle localization system</h3>
                            </header>
                            <p>Design and development of a tracker whose main function is to locate and display information from multiple vehicles. We used a <a href="https://www.itead.cc/sim908-gsm-gprs-gps-module.html">SIM908</a> module with AT commands interface to send the GPS location over GPRS to a backend application.</p>
                            <p>The application receives the data from various devices and generates a map with configurable geofences. Everything is stored in a SQLite database for further analysis.</p>
                            <ul className="actions" data-sal="zoom-out" data-sal-delay="300" data-sal-easing="ease">
                                <li><code>FreeRTOS</code></li>
                                <li><code>GPRS/GPS</code></li>
                                <li><code>C</code></li>
                                <li><code>C++</code></li>
                                <li><code>QtCreator</code></li>
                                <li><code>SQL</code></li>
                            </ul>
                        </div>
                    </div>
                </section>
            </section>
            <section id="three">
                <div className="inner">
                    <p>Esta página tiene una <a href="/es/projects">versión en español</a>.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default ProjectsPage