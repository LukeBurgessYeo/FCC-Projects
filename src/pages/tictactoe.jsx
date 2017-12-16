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
  if (props.playerTurn === null) {
    const btnStyles = { width: 100, margin: 10 };

    return (
      <div>
        <Button bsStyle="primary" style={btnStyles} onClick={() => props.playFirst(true)}>Play First</Button>
        <Button bsStyle="primary" style={btnStyles} onClick={() => props.playFirst(false)}>Play Second</Button>
      </div>
    )
  }

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
        <Footer playFirst={this.PlayFirst} winner={this.state.winner} playerTurn={this.state.playerTurn} reset={this.Reset} />
      </div>
    )
  }
}

const TicTacToe = () => (
  <div className="text-center">
    <h2>Tic Tac Toe!</h2>
    <Board />
  </div>
)
export default TicTacToe