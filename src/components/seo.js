import React from "react"
import { Helmet } from "react-helmet"

import config_en from '../../data/SiteConfig'
import config_es from '../../data/SiteConfig.es'

function SEO({ title, description, lang }) {

    if( !lang ) {
        lang = 'en'
    }
    let config = (lang === 'es') ? config_es : config_en
    let metaTitle = title ? title : config.siteTitle
    let metaDescription = description ? description : config.siteDescription

    return (
        <Helmet
        htmlAttributes={{
            lang,
        }}
        title={title ? title : config.siteTitle}
        meta={[
            {
                name: `description`,
                content: metaDescription,
            },
            {
                property: `og:title`,
                content: metaTitle,
            },
            {
                property: `og:description`,
                content: metaDescription,
            },
            {
                property: `og:type`,
                content: `website`,
            },
            {
                property: `og:image`,
                content: config.siteLogo,
            },
            {
                name: `twitter:card`,
                content: `summary`,
            },
            {
                name: `twitter:creator`,
                content: config.siteAuthor,
            },
            {
                name: `twitter:title`,
                content: metaTitle,
            },
            {
                name: `twitter:description`,
                content: metaDescription,
            },
            {
                property: `twitter:image`,
                content: config.siteLogo,
            },
        ]}
        />
    )
}

export default SEO