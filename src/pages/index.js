import React from "react"
import Style from "./index.module.css"
import SEO from "../components/seo.js"
import Layout from "../components/layout"
import { SiC, SiCplusplus, SiPython, SiGit, SiGnubash, SiCsharp, SiGatsby, SiUnity, SiJavascript, SiNeovim, SiVisualstudiocode, SiEclipseide, SiDocker, SiMysql, SiPostgresql, SiTensorflow } from "react-icons/si"
import { withTranslation } from "react-i18next"

import "../components/i18n"

const HomeIndex = ({ t }) => (
  <Layout>
    <SEO/>

    <h1>{t("Greetings")}</h1>
    <p>{t("About.Item1")}<br/>{t("About.Item2")}<br/>{t("About.Item3")}</p>

    <img src={require("../assets/images/pic.jpg")} alt="Profile" />

    <h2>{t("List.Title")}</h2>
    <ol>
      <li>{t("List.Item1")} ✓</li>
      <li>{t("List.Item2")} ✓</li>
      <li>{t("List.Item3")} ✓</li>
      <li>{t("List.Item4")}</li>
    </ol>

    <h2>{t("Techs.Title")}</h2>
    <p>{t("Techs.Description")}</p>
    <table className={Style.techs}>
      <tbody>
        <tr>
          <td>{t("Techs.Item1")}</td>
          <td>
            <SiC color='#3747a6'/>
            <SiCplusplus color='#005697'/>
            <SiPython color='#f7a000'/>
            <SiCsharp color='#903ba7'/>
            <SiJavascript color='#efd81d'/>
          </td>
        </tr>
        <tr>
          <td>{t("Techs.Item2")}</td>
          <td>
            <SiGatsby color='#663399'/>
            <SiUnity/>
            <SiTensorflow color='#ff8500'/>
            ROS
          </td>
        </tr>
        <tr>
          <td>{t("Techs.Item3")}</td>
          <td>
            <SiMysql color='#006488'/>
            <SiPostgresql color='#31648c'/>
          </td>
        </tr>
        <tr>
          <td>{t("Techs.Item4")}</td>
          <td>
            <SiGit color='#e84e31'/>
            <SiDocker color='#2391e6'/>
            <SiGnubash/>
            <SiNeovim color='#5a933a'/>
            <SiVisualstudiocode color='#0072b9'/>
            <SiEclipseide color='#5b3e90'/>
          </td>
        </tr>
      </tbody>
    </table>
  </Layout>
)

export default withTranslation("translations")(HomeIndex)
