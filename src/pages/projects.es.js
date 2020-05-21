import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const ProjectsPage = ({data}) => (
    <Layout lang="es">
        <SEO title="Nahuel Espinosa | Proyectos" lang="es" />

        <Banner title="Proyectos" sectionStyle="style2">
            <p>Esta es una selección de proyectos y tecnologías <br />
            que usé a lo largo de los años.</p>
        </Banner>

        <div id="main" className="alt style2">
            <section id="one">
                <div className="inner">
                    <p>En esta sección traté de incluir proyectos significativos en los que participé. Están ordenados del más reciente al más antiguo e incluí etiquetas para dar una idea de las tecnologías involucradas.</p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    {data.allProjectsEsJson.nodes.map((project) => (
                        <section>
                            <div className="content box">
                                <header className="major">
                                <h3>{project.title}</h3>
                                </header>
                                <span>
                                    <Image
                                        fluid={project.image.childImageSharp.fluid}
                                        alt={project.title}
                                        style={{ float: "right", width: 250, margin: "0 2rem 2rem" }}
                                    />
                                </span>
                                <div dangerouslySetInnerHTML={ {__html: project.html } }/>
                                {project.source && <ul className="actions">
                                    <li><a href={project.source} className="button icon fa-github">Source Code</a></li>
                                </ul>}
                                {project.tags && <ul className="actions">
                                    {project.tags.map( item => (
                                        <li><code>{item}</code></li>
                                    ))}
                                </ul>}
                            </div>
                        </section>
                    ))}
                </div>
            </section>
            <section id="three">
                <div className="inner">
                    <p>This page has an <a href="/projects">english version</a>.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export const query = graphql`
    query ProjectsEsQuery {
        allProjectsEsJson {
            nodes {
                tags
                title
                html
                source
                tags
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`

export default ProjectsPage