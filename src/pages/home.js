import React from 'react'
import { Jumbotron } from 'react-bootstrap'
import logo from "./assets/download.jpg"

export default class Home extends React.Component {
  render() {
    return (
      <Jumbotron>
        <h1>Free Code Camp Projects</h1>
        <h3>Every Free Code Camp Front End Certificate project, in a single-page application, written in React.</h3>
        <hr />
        <p>Use the menu to navigate to each of the different projects. Check out the About page to learn more about how this app was made. If you want to get in touch with me, you can find me on twitter <a href="https://www.twitter.com/lukeburgessyeo">@LukeBurgessYeo</a>.</p>
        <p>This page acts as the <a href="https://www.freecodecamp.org/challenges/build-a-tribute-page">"Tribute Page" project</a>.</p>
        <img src={logo} alt="FCC logo" />
      </Jumbotron>
    )
  }
}