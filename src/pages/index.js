import React from 'react'
import Layout from '../components/layout'

const HomeIndex = () => (
  <Layout>
    <h1>Hi there!</h1>
    <p>My name is Nahuel. I'm a semi-senior EE and software developer with some experience in robotics.
    <br/>Not much to do here for now. Feel free to look around though.</p>
    <h2>&lt;/&gt; Website To-Do List</h2>
    <ul>
      <li><span role="img" aria-labelledby="white-heavy-check">✅</span> Start with a simple design.</li>
      <li><span role="img" aria-labelledby="white-large-square">⬜</span> Add dark mode, obviously.</li>
      <li><span role="img" aria-labelledby="white-large-square">⬜</span> Add a stories feature.</li>
    </ul>
  </Layout>
)

export default HomeIndex