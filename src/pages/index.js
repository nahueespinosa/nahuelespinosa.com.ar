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
          <td><SiC/><SiCplusplus/><SiPython/><SiCsharp/><SiJavascript/></td>
        </tr>
        <tr>
          <td>{t("Techs.Item2")}</td>
          <td><SiGatsby/><SiUnity/><SiTensorflow/>ROS</td>
        </tr>
        <tr>
          <td>{t("Techs.Item3")}</td>
          <td><SiMysql/><SiPostgresql/></td>
        </tr>
        <tr>
          <td>{t("Techs.Item4")}</td>
          <td><SiGit/><SiDocker/><SiGnubash/><SiNeovim/><SiVisualstudiocode/><SiEclipseide/></td>
        </tr>
      </tbody>
    </table>
    <p className={Style.disclaimer}>
      <i>{t("Techs.Disclaimer")}</i>
    </p>
  </Layout>
)

export default withTranslation("translations")(HomeIndex)
