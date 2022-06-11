import React, { useState } from "react"
import styled from "styled-components"

const Div = styled.div`
  & > div:first-child {
    display: flex;
  }

  & > div:last-child {
    display: none;
  }

  @media (hover: hover) {
    &:hover {
      & > div {
        color: var(--link-color);
      }

      & > div:first-child {
        display: none;
      }
    
      & > div:last-child {
        display: flex;
      }
    }
  }
`

const Icon = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
`

const Toggler = ({ onChange, checked, icon, iconHovered }) => {
  const [activated, setActivated] = useState(checked);

  return (
    <Div
      state={activated}
      onClick={() => {
        onChange(activated)
        setActivated(!activated)
      }}
    >
      <Icon>{icon}</Icon>
      <Icon>{iconHovered}</Icon>
    </Div>
  )
}

export default Toggler
