import React from "react"
import styled from "styled-components"
import { Link } from "gatsby-plugin-intl"

const StyledHeader = styled.header`
  width: 100%;
  border-bottom: 1px dotted var(--border-color);
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
    padding-top: 1em;
  }
`

const Title = styled(Link)`
  font-size: 1.2em;
  letter-spacing: 7px;
  margin: 1em 0;
  white-space: nowrap;
  color: var(--heading-color);
  text-decoration: none;
`

const Options = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  color: var(--heading-color);

  & > * {
    margin-left: 2em;
    color: var(--heading-color);
  }

  @media only screen and (max-width: 600px) {
    width: 100%;

    & > * {
      margin: 0;
    }
  }
`

const Header = ({ title, children }) => {
  return (
    <StyledHeader>
      <Container>
        <Title to="/">{title}</Title>
        <Options>{children}</Options>
      </Container>
    </StyledHeader>
  )
}

export default Header
