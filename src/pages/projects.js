import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import Banner from '../components/Banner'

const ProjectsPage = ({data}) => (
    <Layout lang="en">
        <SEO title="Nahuel Espinosa | Projects" />

        <Banner title="Projects" sectionStyle="style2">
            <p>This is a selection of projects and technologies <br />
            I've used throughout the years.</p>
        </Banner>

        <div id="main" className="alt style2">
            <section id="one">
                <div className="inner">
                    <p>On this page I included some of the projects I've worked on. They are ordered from newest to oldest and I've added some tags to give an idea of the technologies involved.</p>
                </div>
            </section>
            <section id="two">
                <div className="inner">
                    {data.allProjectsJson.nodes.map((project) => (
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
                    <p>Esta página tiene una <a href="/es/projects">versión en español</a>.</p>
                </div>
            </section>
        </div>

    </Layout>
)

export const query = graphql`
    query ProjectsQuery {
        allProjectsJson {
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