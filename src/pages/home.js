import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import logo from "./assets/download.jpg"

export default class Home extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Free Code Camp Projects</h1>
        <p>Every FreeCodeCamp Front End Certificate project, in a single-page application, written in React.</p>
        <p>This page acts as the <a href="https://www.freecodecamp.org/challenges/build-a-tribute-page">"Tribute Page" project</a>.</p>
        <img src={logo} alt="FCC logo" />
      </Jumbotron>
    )
  }
}