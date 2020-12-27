import React from 'react'
import SEO from '../components/seo.js'
import Layout from '../components/layout'

import { withTranslation } from "react-i18next"

const NotFoundPage = ({ t }) => (
  <Layout>
    <SEO/>
    <h1>{t("Not Found.Title")}</h1>
    <p>{t("Not Found.Description")}</p>
  </Layout>
)

export default withTranslation("translations")(NotFoundPage)
