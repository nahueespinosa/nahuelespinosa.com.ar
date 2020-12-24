import React from 'react'
import Layout from '../components/layout'

const HomeIndex = () => (
  <Layout>
    <h1>Hi there!</h1>
    <p>My name is Nahuel. I'm a semi-senior EE and software developer with some experience in robotics.
    <br/>Not much to do here for now. Feel free to look around though.</p>
    <h2>&lt;/&gt; Website To-Do List</h2>
    <ul>
      <li><input type="checkbox" checked disabled="disabled"/> Start with a simple design.</li>
      <li><input type="checkbox" disabled="disabled"/> Add night mode, obviously.</li>
      <li><input type="checkbox" disabled="disabled"/> Add a stories feature.</li>
    </ul>
  </Layout>
)

export default HomeIndex