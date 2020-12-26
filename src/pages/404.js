import React from 'react'
import SEO from '../components/seo.js'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <SEO/>
    <h1>Not found!</h1>
    <p>Hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
