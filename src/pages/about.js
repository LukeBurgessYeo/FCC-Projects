import React from 'react'
import { Grid, Row, Col, Nav, NavItem, Button } from 'react-bootstrap'
import FontAwesome from 'react-fontawesome'

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeKey: 1
    };
  }

  handleSelect = (selectedKey) => {
    this.setState(prev => ({ activeKey: selectedKey }));
  }

  render() {
    return (
      <div>
        <Nav bsStyle="pills" stacked activeKey={this.state.activeKey} onSelect={this.handleSelect}>
          <NavItem eventKey={1}>Overview</NavItem>
          <NavItem eventKey={2}>React</NavItem>
          <NavItem eventKey={3}>Bootstrap</NavItem>
          <NavItem eventKey={4}>React-Router</NavItem>
        </Nav>
        <hr />
        <Button block href="https://codepen.io/LukeBurgess94/"><FontAwesome name='codepen' size='2x' /></Button>
        <Button block href="https://github.com/LukeBurgessYeo"><FontAwesome name='github' size='2x' /></Button>
        <Button block href="#"><FontAwesome name='free-code-camp' size='2x' /></Button>
      </div>
    )
  }
}

export default class About extends React.Component {
  render() {
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col md={12}>
              <h2>About Page</h2>
              <p>This is the <a href="https://www.freecodecamp.org/challenges/build-a-personal-portfolio-webpage">portfolio page project</a>. This page will explain how this app was made.</p>
              <hr />
            </Col>
          </Row>
          <Row className="show-grid">
            <Col md={2}>
              <Sidebar />
            </Col>
            <Col md={10}>
              and this is the main content
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}