import React, { useState } from "react"
import styled from "styled-components"

const Div = styled.div`
  & > div:first-child {
    display: ${({ state }) => state ? 'none' : 'flex' }
  }

  & > div:last-child {
    display: ${({ state }) => !state ? 'none' : 'flex' }
  }

  @media (hover: hover) {
    &:hover {
      & > div {
        color: var(--link-color);
      }

      /* TODO(nahue): Check if this is the desired behaviour */
      & > div:first-child {
        display: ${({ state }) => !state ? 'none' : 'flex' }
      }
    
      & > div:last-child {
        display: ${({ state }) => state ? 'none' : 'flex' }
      }
    }
  }
`

const Icon = styled.div`
  cursor: pointer;
  align-items: center;
  display: flex;
`

const Toggler = ({ onChange, checked, iconChecked, iconUnchecked }) => {
  const [activated, setActivated] = useState(checked);

  return (
    <Div
      state={activated}
      onClick={() => {
        onChange(activated)
        setActivated(!activated)
      }}
    >
      <Icon>{iconUnchecked}</Icon>
      <Icon>{iconChecked}</Icon>
    </Div>
  )
}

export default Toggler
