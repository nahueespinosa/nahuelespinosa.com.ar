import React from "react"
import styled from "styled-components"
import { changeLocale, useIntl } from "gatsby-plugin-intl"

const Button = styled.button`
  background: none;
  border: none;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  cursor: pointer;
  white-space: nowrap;
  padding: 0;

  &:hover {
    color: var(--link-color);
    text-decoration: underline;
  }
`

const LanguageButton = ({ label }) => {
  const intl = useIntl()

  return(
    <Button onClick={() => {changeLocale(intl.locale === 'en' ? 'es' : 'en')}}>
      {label}
    </Button>
  )
}

export default LanguageButton
