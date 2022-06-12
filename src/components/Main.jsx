import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  margin: 0 auto;
  max-width: 50em;
  padding: 0 1em;
`

const Main = ({children}) => {
  return (
    <main>
      <Container>
        {children}
      </Container>
    </main>
  )
}

export default Main
