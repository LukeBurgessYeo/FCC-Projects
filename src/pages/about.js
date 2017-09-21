import React from 'react'
import { Grid, Row, Col, Nav, NavItem, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeKey: 1
    };
  }

  handleSelect = (selectedKey) => {
    switch(selectedKey) {
      case 1:
        this.refs.overview.scrollIntoView();
        break;
      case 2:
        this.refs.react.scrollIntoView();
        break;
      case 3:
        this.refs.bootstrap.scrollIntoView();
        break;
      case 4:
        this.refs.reactrouter.scrollIntoView();
        break;
      default:
        break;
    }
    this.setState(prev => ({ activeKey: selectedKey }));
  }

  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col sm={12}>
              <h2>About Page</h2>
              <p>This is the <a href="https://www.freecodecamp.org/challenges/build-a-personal-portfolio-webpage">portfolio page project</a>. This page explains how this app was made.</p>
              <p>You can also use the buttons below to find my work on CodePen, Github and FreeCodeCamp.</p>
              <hr />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col sm={2}>
              <div>
                <Button block href="https://codepen.io/LukeBurgess94/"><FontAwesome name='codepen' size='2x' /></Button>
                <Button block href="https://github.com/LukeBurgessYeo"><FontAwesome name='github' size='2x' /></Button>
                <Button block href="#"><FontAwesome name='free-code-camp' size='2x' /></Button>
                <hr />
                <Nav bsStyle="pills" stacked activeKey={this.state.activeKey} onSelect={this.handleSelect}>
                  <NavItem eventKey={1}>Overview</NavItem>
                  <NavItem eventKey={2}>React</NavItem>
                  <NavItem eventKey={3}>Bootstrap</NavItem>
                  <NavItem eventKey={4}>React-Router</NavItem>
                </Nav>
                <hr />
              </div>
            </Col>
            <Col sm={10}>
              <div>
                <h2 ref="overview">Overview</h2>
                <p>Having completed the Free Code Camp Front End Certificate over the summer of 2016, I manageed to get a job as a .NET developer later that year. The front end skills I learnt doing Free Code Camp have been invaluable, but the front end of the web has come a long way since jQuery. Frameworks like React have become incredibly popular and one year on from finishing the Front End Certificate I thought it was about time I upgraded my front end skillset. This app was started as a way to practice React, as well as try out some other technologies which I talk about below.</p>
                <p>The Free Code Camp projects were a fantistic for easing myself into front end development back when I was just starting out, so I decided to revisit these same projects to ease myself into building complex web applications with a new set of technologies. If you wish to view my original attempts at the Free Code Camp projects, they are still on my CodePen page which you can access via the button with the CodePen logo.</p>
                <hr />
                <h2 ref="react">React</h2>
                <p>It is natural to ask the question: Why React? Or maybe: What was wrong with jQuery? The simple answer is, jQuery isn't good for doing certains things...</p>
                <p>jQuery is an amazing library for speeding up the sorts of things that JavaScript was originaly indended for: input validation and basic manipulation of the DOM. However, building a Single Page Application (which is now the fansionable thing to do) is unbelievably difficult using just jQuery.</p>
                <p>React, however, was designed especially for building complex user interfaces and has become one of the market leading technologies for devloping the front end of the web. That is why I chose React.</p>
                <hr />
                <h2 ref="bootstrap">Bootstrap</h2>
                <p>It wouldn't be Free Code Camp without Bootstrap, but the standard Bootstrap library requires jQuery which defeats the point of using React. Fortunately there is an ongoing project to rebuild Boostrap using React: <a href="https://react-bootstrap.github.io/">React Bootstrap</a>.</p>
                <p>React Boostrap is the reason this app looks the way it does, as I have delibrately left the styling to Bootstrap's default CSS. Although the React Bootstrap project is still in development, I hope that building this application will give me enough knowledge of the current API to contribute to the project and help React Bootstrap reach it's v1.0 release.</p>
                <hr />
                <h2 ref="reactrouter">React Router</h2>
                <p>The final technology worth mentioning is <a href="https://reacttraining.com/react-router/">React Router</a>. React Router is used for front-end routing, to keep the URL in sync with the UI despite the fact that this is a static application.</p>
                <p>It is worth noting that React Router does not work with React Bootstrap out of the box so I use the <a href="https://www.npmjs.com/package/react-router-bootstrap">React Bootstrap Router</a> npm package to make the React Bootstrap navbar work with React Router.</p>
              </div>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}