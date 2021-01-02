import React from 'react'
import styled from "styled-components"

const StyledMain = styled.main`
  min-height: 100vh;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: 50em;
  padding: 1em;
`

const Main = ({ children }) => {
  return (
    <StyledMain>
      <Container>
        {children}
      </Container>
    </StyledMain>
  )
}

export default Main
