import React from 'react'
import Style from "./index.module.css"
import SEO from '../components/seo.js'
import Layout from '../components/layout'
import { SiC, SiCplusplus, SiPython, SiGit, SiGnubash, SiCsharp, SiGatsby, SiUnity, SiJavascript, SiNeovim, SiVisualstudiocode, SiEclipseide, SiDocker, SiSlack, SiMysql, SiPostgresql, SiTensorflow } from 'react-icons/si'

const HomeIndex = () => (
  <Layout>
    <SEO/>

    <h1>Hi there!</h1>
    <p>
      My name is Nahuel.
      <br/>I'm a semi-senior EE and software developer with experience in embedded systems and robotics.
      <br/>I'm also a computer science teacher at a local highschool.
    </p>

    <h2>Website To-Do List &lt;/&gt;</h2>
    <ul>
      <li><span role="img" aria-labelledby="white-heavy-check">✅</span> Start with a simple design.</li>
      <li><span role="img" aria-labelledby="white-heavy-check">✅</span> Add dark mode, obviously.</li>
      <li><span role="img" aria-labelledby="white-large-square">⬜</span> Add a stories feature.</li>
    </ul>

    <h2>Technologies</h2>
    <p>These are some of the technologies I've worked with.</p>
    <table className={Style.techs}>
      <tbody>
        <tr>
          <td>Programming Languages</td>
          <td><SiC/><SiCplusplus/><SiPython/><SiCsharp/><SiJavascript/></td>
        </tr>
        <tr>
          <td>Frameworks / Libraries</td>
          <td><SiGatsby/><SiUnity/><SiTensorflow/>ROS</td>
        </tr>
        <tr>
          <td>Databases</td>
          <td><SiMysql/><SiPostgresql/></td>
        </tr>
        <tr>
          <td>Tools</td>
          <td><SiGit/><SiDocker/><SiGnubash/><SiNeovim/><SiVisualstudiocode/><SiEclipseide/><SiSlack/></td>
        </tr>
      </tbody>
    </table>
    <p className={Style.disclaimer}>
      <i>Disclaimer 1: I am by no means an expert in <b>every</b> tool/language/framework listed here.</i>
      <br/><i>Disclaimer 2: I couldn't find easy-to-include icons for the embedded systems technologies I've used. So I didn't bother. </i><span role="img" aria-labelledby="shrugging">🤷</span>
    </p>
  </Layout>
)

export default HomeIndex
