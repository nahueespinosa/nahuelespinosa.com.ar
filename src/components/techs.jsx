import React from "react"
import styled from "styled-components"
import { useIntl } from "gatsby-plugin-intl"
import * as Icons from "react-icons/si"

const Table = styled.table`
  & > tbody > tr {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  & > tbody > tr > td > svg {
    padding: 0 5px;
    font-size: 1.5em;
    color: var(--high-contrast-color);
  }

  @media only screen and (max-width: 600px) {
    & > tbody, 
    & > tbody > th,
    & > tbody > tr,
    & > tbody > tr > td {
      /* There must be a better way of doing this. */
      display: block;
      text-align: center;
    }
  }
`

const Techs = () => {
  const intl = useIntl()
  const t = (id) => intl.formatMessage({ id })

  return (
    <>
      <h2>{t("Techs.Title")}</h2>
      <p>{t("Techs.Description")}</p>
      <Table>
        <tbody>
          <tr>
            <td>{t("Techs.Item1")}</td>
            <td>
              <Icons.SiC color='#3747a6'/>
              <Icons.SiCplusplus color='#005697'/>
              <Icons.SiPython color='#f7a000'/>
              <Icons.SiCsharp color='#903ba7'/>
              <Icons.SiJavascript color='#efd81d'/>
            </td>
          </tr>
          <tr>
            <td>{t("Techs.Item2")}</td>
            <td>
              <Icons.SiGatsby color='#663399'/>
              <Icons.SiUnity/>
              <Icons.SiTensorflow color='#ff8500'/>
              ROS
            </td>
          </tr>
          <tr>
            <td>{t("Techs.Item3")}</td>
            <td>
              <Icons.SiMysql color='#006488'/>
              <Icons.SiPostgresql color='#31648c'/>
            </td>
          </tr>
          <tr>
            <td>{t("Techs.Item4")}</td>
            <td>
              <Icons.SiGit color='#e84e31'/>
              <Icons.SiDocker color='#2391e6'/>
              <Icons.SiGnubash/>
              <Icons.SiNeovim color='#5a933a'/>
              <Icons.SiVisualstudiocode color='#0072b9'/>
              <Icons.SiEclipseide color='#5b3e90'/>
            </td>
          </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Techs