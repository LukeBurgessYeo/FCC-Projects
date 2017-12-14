import React from 'react'
import { Button } from 'react-bootstrap'

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

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grid: [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
      ],
      xTurn: true,
      winner: ""
    };
  }

  CheckForWin = (g) => {
    const lines = [
      g[0].join(""),
      g[1].join(""),
      g[2].join(""),
      g[0][0] + g[1][0] + g[2][0],
      g[0][1] + g[1][1] + g[2][1],
      g[0][2] + g[1][2] + g[2][2],
      g[0][0] + g[1][1] + g[2][2],
      g[0][2] + g[1][1] + g[2][0]
    ];

    for (const line in lines) {
      if (lines[line] === "XXX") {
        return "X's Win!";
      } else if (lines[line] === "OOO") {
        return "O's Win!";
      }
    }

    if (lines.slice(0, 3).join("").length === 9) {
      return "Draw!";
    }

    return "";
  }

  Choose = (coords) => {
    let newGrid = this.state.grid;
    newGrid[coords[0]][coords[1]] = (this.state.xTurn) ? "X" : "O";
    const win = this.CheckForWin(newGrid);

    this.setState(p => ({
      grid: newGrid,
      xTurn: !p.xTurn,
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
      xTurn: true,
      winner: ""
    });
  }

  render() {
    const Play = (props) => (
      <div>
        <h3>{(this.state.xTurn ? "X's " : "O's ")} turn.</h3>
      </div>
    );

    const GameOver = (props) => (
      <div>
        <h3>{this.state.winner}</h3>
        <Button bsStyle="primary" onClick={this.Reset}>Play Again?</Button>
      </div>
    );

    return (
      <div>
        <table>
          <tbody>
            {[0, 1, 2].map(i => (
              <tr key={i} className="text-center">
                {[0, 1, 2].map(j => (
                  <td key={j}>
                    <Box enabled={this.state.winner === ""} value={this.state.grid[i][j]} choose={() => this.Choose([i, j])} />
                  </td>
                ))}
              </tr>))}
          </tbody>
        </table>
        {this.state.winner === "" ? <Play /> : <GameOver />}
      </div>
    )
  }
}

const TicTacToe = () => (
  <div className="text-center">
    <h2>Tic Tac Toe!</h2>
    <p>(Currently 2-player. 1-player vs AI coming soon!)</p>
    <Board />
  </div>
)
export default TicTacToe