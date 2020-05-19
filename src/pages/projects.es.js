import React from 'react'
import { Link } from 'gatsby'
import SEO from '../components/seo.js'
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
    <Layout lang="es">
        <SEO title="Nahuel Espinosa | Proyectos" lang="es" />

        <Banner title="Proyectos" sectionStyle="style2">
            <p>Esta es una selección de proyectos y tecnologías <br />
            que usé a lo largo de los años.</p>
        </Banner>

        <div id="main" className="style2">
            <section id="one">
                <div className="inner">
                    <p>En esta sección traté de incluir los proyectos más significativos en los que participé. Están ordenados del más reciente al más antiguo e incluí etiquetas para dar una idea de las tecnologías involucradas.</p>
                </div>
            </section>
            <section id="two" className="spotlights">
                <section>
                    <img className="image" src={project07} alt="" />
                    <div className="content">
                        <div className="inner">
                            <header className="major">
                                <h3>Mi sitio web personal</h3>
                            </header>
                            <p>Esta página fue desarrollada con Gatsby framework (React, node.js) usando <a href="https://github.com/codebushi/gatsby-starter-forty">este starter</a>. <br/>
                            Adapté el tema a mis necesidades y agregué/modifiqué varios componentes (<Link to="/es/timeline#two">Timeline</Link>, Banner).</p>
                            <ul className="actions">
                                <li><a href="https://github.com/nahueespinosa/my-site" className="button icon fa-github">Código Fuente</a></li>
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
                            <p>Este es un juego que permite visualizar conceptos y jugar con algoritmos de búsqueda para estructuras de datos con grafos. La interfaz está implementada con PyGame, y permite dibujar muros y seleccionar las posiciones iniciales y finales.</p>
                            <p>Comencé este proyecto después de finalizar el curso <a href="https://github.com/nahueespinosa/ai50">Introduction to Artificial Intelligence</a> de <a href="https://cs50.harvard.edu/ai/2020/">CS50</a>.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/nahueespinosa/visual_graph_search" className="button icon fa-github">Código Fuente</a></li>
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
                                <h3>sAPI port para placa Blue Pill</h3>
                            </header>
                            <p>Port de la librería sAPI a la <a href="https://stm32-base.org/boards/STM32F103C8T6-Blue-Pill.html">placa STM32F103C8 Blue Pill</a>. Funciona como una HAL (Capa de Abstracción de Hardware) para microcontroladores usada en el <a href="http://www.proyecto-ciaa.com.ar/">proyecto CIAA</a>.</p>
                            <p>Proporciona un buen punto de entrada para estudiantes al mundo de los sistemas embebidos.</p>
                            <ul className="actions">
                                <li><a href="https://github.com/nahueespinosa/sapi_bluepill" className="button icon fa-github">Código Fuente</a></li>
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
                                <h3>Placa base para STM32F4DISCOVERY</h3>
                            </header>
                            <p>Diseño de PCB de una placa base para el <a href="https://www.st.com/en/evaluation-tools/stm32f4discovery.html">kit de desarrollo STM32F4DISCOVERY</a>. Incluye los siguientes periféricos: potenciómetro, teclado, display LCD, encoder, LED RGB, buzzer piezoeléctrico, salidas aisladas (optoacoplador), zócalo micro SD, ESP8266, entradas analógicas 4-20mA.</p>
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
                                <h3>Medidor de energía</h3>
                            </header>
                            <p>Diseño y desarrollo de un dispositivo capaz de medir parámetros eléctricos como potencia activa, tensión y corriente instantáneas, factor de potencia y energía.</p>
                            <p>Posee almacenamiento interno y un servidor web integrado para acceder a la información en tiempo real. Los principales chips usados fueron LPC1769, ESP8266, ATM90E36A. Conectividad: Ethernet, WiFi, Modbus.</p>
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
                                <h3>Sistema de control de asiento de vehículo</h3>
                            </header>
                            <p>Implementación de un sistema de control de asiento de un vehículo con sensor de temperatura, calentador y sensor de presencia. Dos asientos conectados a través de un bus LIN, y comunicación CAN con el resto del vehículo.</p>
                            <p>Para la comunicación LIN se utilizó la UART2 del microcontrolador con un transceiver <a href="http://www.ti.com/lit/ds/symlink/tpic1021.pdf?&ts=1589836790029">TPIC1021DR</a>. Y para el bus CAN se utilizó el transceiver <a href="https://www.ti.com/product/SN65HVD1040">SN65HVD1040</a>.</p>
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
                                <h3>Sistema de localización de vehículos</h3>
                            </header>
                            <p>Diseño y desarrollo de un rastreador cuya función principal es localizar y mostrar información de múltiples vehículos. Usamos un módulo <a href="https://www.itead.cc/sim908-gsm-gprs-gps-module.html">SIM908</a> con una interfaz de comandos AT para enviar la posición GPS sobre GPRS a una aplicación backend.</p>
                            <p>La aplicación recibe los datos de varios dispositivos y genera un mapa con geocercas configurables. Se almacena todo en una base de datos SQLite para un posterior análisis.</p>
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
                    <p>This page has an <a href="/projects">english version</a>.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export default ProjectsPage