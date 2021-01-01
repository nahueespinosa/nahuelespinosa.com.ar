import React from "react"
import styled from "styled-components"
import Switch from "react-switch"

const Div = styled.div`
  display: flex;
  align-items: center;
`

const Span = styled.span`
  padding: 0 10px;
  white-space: nowrap;
`

const Toggler = ({ label, onChange, checked }) => {
  return (
    <Div>
      <Span>{label}</Span>
      <Switch 
        onChange={onChange}
        checked={checked}
        height={20}
        width={40}
        handleDiameter={25}
        uncheckedIcon={false}
        checkedIcon={false}
        boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
        activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
        onColor="#86d3ff"
        onHandleColor="#2693e6"
        aria-label="Dark Mode"
      />
    </Div>
  )
}

export default Toggler
