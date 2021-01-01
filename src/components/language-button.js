import React from "react"
import styled from "styled-components"
import { changeLocale, useIntl } from "gatsby-plugin-intl"

const Button = styled.a`
  cursor: pointer;
`

const LanguageButton = ({ label }) => {
  const intl = useIntl()

  return(
    <Button onClick={() => {
      changeLocale(intl.locale === 'en' ? 'es' : 'en')
    }}>
      {label}
    </Button>
  )
}

export default LanguageButton
