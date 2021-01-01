import React, { useState } from "react"
import styled from "styled-components"
import { ImSun } from "react-icons/im"
import { FaRegMoon } from "react-icons/fa"

const Div = styled.div`
  & > div:first-child {
    display: ${({ state }) => state ? 'none' : 'flex' }
  }

  & > div:last-child {
    display: ${({ state }) => !state ? 'none' : 'flex' }
  }

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
`

const Icon = styled.div`
  font-size: 1.5em;
  cursor: pointer;
  align-items: center;
  display: flex;
`

const Toggler = ({ onChange, checked }) => {
  const [activated, setActivated] = useState(checked);

  return (
    <Div
      state={activated}
      onClick={() => {
        onChange(activated)
        setActivated(!activated)
      }}
    >
      <Icon><ImSun/></Icon>
      <Icon><FaRegMoon/></Icon>
    </Div>
  )
}

export default Toggler
