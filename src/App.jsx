import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { Grid, Row, Col } from 'react-bootstrap'
import NavbarInstance from './common/navbar'
import Home from './pages/home'
import About from './pages/about'
import Quote from './pages/quote'
import Weather from './pages/weather'
import Wikipedia from './pages/wikipedia'
import Twitch from './pages/twitch'
import Calculator from './pages/calculator'
import Pomodoro from './pages/pomodoro'
import TicTacToe from './pages/tictactoe'
import Simon from './pages/simon'

const App = () => (
  <Router basename="/FCC-Projects">
    <div>
      <NavbarInstance />
      <Grid>
        <Row className="show-grid">
          <Col sm={12}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/quote" component={Quote} />
              <Route path="/weather" component={Weather} />
              <Route path="/wikipedia" component={Wikipedia} />
              <Route path="/twitch" component={Twitch} />
              <Route path="/calculator" component={Calculator} />
              <Route path="/pomodoro" component={Pomodoro} />
              <Route path="/tictactoe" component={TicTacToe} />
              <Route path="/simon" component={Simon} />
              <Redirect to="/" component={Home} />
            </Switch>
          </Col>
        </Row>
      </Grid>
    </div>
  </Router>
)
export default App
