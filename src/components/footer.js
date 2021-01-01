import React from "react"
import styled from "styled-components"
import { useIntl, FormattedMessage } from "gatsby-plugin-intl"
import { FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const StyledFooter = styled.footer`
  position: relative;
  border-top: 1px solid var(--border-color);
  background-color: var(--background-color);
`

const Container = styled.div`
  padding: 1em;
  margin: 0 auto;
  max-width: 50em;
  display: flex;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

const Info = styled.div`
  width: 70%;

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`

const Social = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 600px) {
    width: 100%;
    justify-content: center;
    text-align: center;
  }
`

const SocialLink = styled.a`
  font-size: 2.2em;
  padding: 10px;
  color: var(--font-color);
  opacity: 0.5;
  
  &:hover {
    opacity: 1.0;
    color: var(--font-color);
  }
`

const Footer = ({ location, links }) => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  return (
    <StyledFooter>
      <Container>
        <Info>
          <p>
            <FormattedMessage
              id="Footer.Contact"
              values={{
                a: chunks => (<a href={links.email}>{chunks}</a>)
              }}
            />
            <br/>
            {t("Footer.Location")} <FaMapMarkerAlt/> <a href={"https://www.google.com.ar/maps/place/" + location}>{location}</a>.
          </p>
        </Info>
        <Social>
          <SocialLink href={links.twitter} aria-label="Twitter"><FaTwitter/></SocialLink>
          <SocialLink href={links.github} aria-label="GitHub"><FaGithub/></SocialLink>
          <SocialLink href={links.linkedin} aria-label="LinkedIn"><FaLinkedin/></SocialLink>
        </Social>
      </Container>
    </StyledFooter>
  )
}

export default Footer
