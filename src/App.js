import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import NavbarInstance from './common/navbar'
import Home from './pages/home'
import About from './pages/about'
import ComingSoon from './pages/comingsoon'

const App = () => (
  <Router>
    <div>
      <NavbarInstance />
      <Grid>
        <Row className="show-grid">
          <Col md={12}>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/quote" component={ComingSoon} />
            <Route path="/weather" component={ComingSoon} />
            <Route path="/wikipedia" component={ComingSoon} />
            <Route path="/twitch" component={ComingSoon} />
            <Route path="/calculator" component={ComingSoon} />
            <Route path="/pomodoro" component={ComingSoon} />
            <Route path="/tictactoe" component={ComingSoon} />
            <Route path="/simon" component={ComingSoon} />
          </Col>
        </Row>
      </Grid>
    </div>
  </Router>
)
export default App
