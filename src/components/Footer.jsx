import React from 'react'
import styled from 'styled-components'
import {FaGithub, FaLinkedin, FaTwitter} from 'react-icons/fa'

const StyledFooter = styled.footer`
  border-top: 1px dotted var(--border-color);
`

const Container = styled.div`
  padding: 0 1em;
  margin: 0 auto;
  max-width: 50em;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 600px) {
    display: block;
  }
`

const Info = styled.small`
  flex-grow: 3;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    text-align: center;
  }
`

const Social = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  @media only screen and (max-width: 600px) {
    justify-content: center;
    text-align: center;
  }
`

const SocialLink = styled.a`
  font-size: 2.2em;
  margin: 10px;
  color: var(--border-color);
  
  &:hover {
    opacity: 0.5;
    color: var(--border-color);
  }

  &:hover::before {
    visibility: hidden;
  }
`

const Footer = ({message, social}) => {
  return (
    <StyledFooter>
      <Container>
        <Info>
          {message}
        </Info>
        <Social>
          <SocialLink href={social.twitter} aria-label="Twitter"><FaTwitter/></SocialLink>
          <SocialLink href={social.github} aria-label="GitHub"><FaGithub/></SocialLink>
          <SocialLink href={social.linkedin} aria-label="LinkedIn"><FaLinkedin/></SocialLink>
        </Social>
      </Container>
    </StyledFooter>
  )
}

export default Footer
