import React from "react"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;

  @media only screen and (max-width: 600px) {
    flex-direction: column-reverse;
  }
`

const TextWrapper = styled.div`
  flex-grow: 3;
`

const Title = styled.h1`
  border-image: linear-gradient(to right, var(--border-color), rgba(0, 0, 0, 0)) 100% 1 / 1 / 0 stretch;

  @media only screen and (max-width: 600px) {
    border-image: none;
  }
`

const ImgWrapper = styled.div`
  flex-grow: 1;
  margin: 3em;

  @media only screen and (max-width: 600px) {
    margin: 2em 0 0 0;
  }
`

const Greetings = ({ title, text, image }) => {
    return (
      <Container>
        <TextWrapper>
          <Title>{title}</Title>
          <p>{text}</p>
        </TextWrapper>
        <ImgWrapper>
          {image}
        </ImgWrapper>
      </Container>
    )
  }
  
  export default Greetings