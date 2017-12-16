import React from 'react'
import { Button } from 'react-bootstrap'
import { AIChoice, CheckForWin } from '../scripts/tictactoeLogic'

const AI_SPEED = 500;

const Box = (props) => {
  const canClick = (props.value === "" && props.enabled);

  return (
    <div
      className={(canClick ? "xoBoxHover " : "") + "xoBox"}
      onClick={canClick && props.choose}>
      <p>{props.value}</p>
    </div>
  )
}

const Footer = (props) => {
  if (props.winner === "") {
    return (
      <div>
        <h3>{(props.playerTurn ? "Your " : "AI's ")} turn.</h3>
      </div>
    )
  }

  return (
    <div>
      <h3>
        {(props.winner === "D")
          ? "Draw!"
          : (props.playerTurn)
            ? "You Lose!"
            : "You Win!"}
      </h3>
      <Button bsStyle="primary" onClick={props.reset}>Play Again?</Button>
    </div>
  );
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      playerTurn: null,
      winner: ""
    };
  }

  Choose = (coords) => {
    let newGrid = this.state.grid;
    newGrid[coords[0]][coords[1]] = (this.state.playerTurn) ? "X" : "O";
    const win = CheckForWin(newGrid);

    this.setState(p => ({
      grid: newGrid,
      playerTurn: !p.playerTurn,
      winner: win
    }));
  }

  Reset = () => {
    this.setState({
      grid: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      playerTurn: null,
      winner: ""
    });
  }

  PlayFirst = (first) => {
    this.setState({
      playerTurn: first
    });
  }

  componentDidUpdate() {
    if (this.state.winner === "" && this.state.playerTurn === false) {
      setTimeout(() => (this.Choose(AIChoice(this.state.grid))), AI_SPEED);
    }
  }

  render() {
    if (this.state.playerTurn === null) {
      const btnStyles = { width: 100, margin: 10 };

      return (
        <div>
          <h2>Play first or second?</h2>
          <Button style={btnStyles} onClick={() => this.PlayFirst(true)}>First</Button>
          <Button style={btnStyles} onClick={() => this.PlayFirst(false)}>Second</Button>
        </div>
      )
    }

    return (
      <div>
        <table>
          <tbody>
            {[0, 1, 2].map(i => (
              <tr key={i} className="text-center">
                {[0, 1, 2].map(j => (
                  <td key={j}>
                    <Box
                      enabled={this.state.winner === "" && this.state.playerTurn}
                      value={this.state.grid[i][j]} choose={() => this.Choose([i, j])}
                    />
                  </td>
                ))}
              </tr>))}
          </tbody>
        </table>
        <Footer winner={this.state.winner} playerTurn={this.state.playerTurn} reset={this.Reset} />
      </div>
    )
  }
}

const TicTacToe = () => (
  <div className="text-center">
    <h2>Tic Tac Toe!</h2>
    <p>(v 1.3: AI creates forks, blocks and wins.)</p>
    <Board />
  </div>
)
export default TicTacToe