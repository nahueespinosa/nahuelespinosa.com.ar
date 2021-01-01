import React from "react"
import styled from "styled-components"
import { useIntl, Link } from "gatsby-plugin-intl"
import LanguageButton from "./language-button"
import DarkToggler from "./dark-toggler"

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  border-bottom: 1px solid var(--border-color);
  background-color: var(--background-color);
  z-index: 2;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 50em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1em;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
    text-align: center;
    padding: 0.5em;
  }
`

const Title = styled(Link)`
  font-size: 1.2em;
  letter-spacing: 5px;
  padding: 1em 0;
  white-space: nowrap;
  color: var(--font-color);
  text-decoration: none;

  @media only screen and (max-width: 600px) {
    padding: 0.5em;
  }
`

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: var(--code-font);
  height: 100%;

  & > * {
    margin-left: 2em;
  }

  @media only screen and (max-width: 600px) {
    width: 100%;

    & > * {
      margin: 0;
    }
  }
`

const Header = ({ title }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  return (
    <StyledHeader>
      <Container>
        <Title to="/">{title}</Title>
        <Options>
          <LanguageButton label={t("Header.Language")} />
          <DarkToggler label={t("Header.DarkMode")} />
        </Options>
      </Container>
    </StyledHeader>
  )
}

export default Header
