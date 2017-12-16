export const CheckForWin = (grid) => {
  const lines = getAllLines(grid).map(l => l.join(""));

  for (const line in lines) {
    if (lines[line] === "XXX" || lines[line] === "OOO") {
      return "W";
    }
  }

  if (lines.slice(0, 3).join("").length === 9) {
    return "D";
  }

  return "";
}

export const AIChoice = (grid) => {
  const allLines = getAllLines(grid);

  let result = winOrBlock(allLines, "OO");
  if (result) {
    console.log("AI Plays: Win.");
    return result;
  }

  result = winOrBlock(allLines, "XX");
  if (result) {
    console.log("AI Plays: Block.");
    return result;
  }

  result = fork(grid);
  if (result) {
    console.log("AI Plays: Fork.");
    return result;
  }

  result = twoInARow(grid);
  if (result) {
    console.log("AI Plays: Forcing move.");
    return result;
  }

  // if (grid[1][1] === "") {
  //   console.log("AI Play: Centre");
  //   return [1, 1];
  // }

  // result = oppositeCorner(grid);
  // if (result) {
  //   console.log("AI Plays: Opposite corner.");
  //   return result;
  // }

  // result = emptySquares(grid, true);
  // if (result) {
  //   console.log("AI Plays: Empty corner.");
  //   return result;
  // }

  // result = emptySquares(grid, false);
  // if (result) {
  //   console.log("AI Plays: Empty side.");
  //   return result;
  // }

  console.log("AI Plays: Random move.");
  return randomPlay(grid);
}

const winOrBlock = (allLines, strat) => {
  for (const line in allLines) {
    if (allLines[line].join("") === strat) {
      for (const pos in allLines[line]) {
        if (allLines[line][pos] === "") {
          let x = +line;
          let y = +pos;

          if (x > 2 && x < 6) {
            return [y, x - 3];
          }

          if (x === 6) {
            return [y, y];
          }

          if (x === 7) {
            return [y, 2 - y];
          }

          return [x, y];
        }
      }
    }
  }
}

const fork = (grid) => {
  let g = JSON.parse(JSON.stringify(grid));
  for (const x in g) {
    for (const y in g[x]) {
      if (g[x][y] === "") {
        g[x][y] = "O";
        const newLines = getAllLines(g);
        let doubleLines = 0;
        for (const line in newLines) {
          if (newLines[line].join("") === "OO") {
            doubleLines += 1;
            if (doubleLines === 2) {
              return [x, y];
            }
          }
        }
        g[x][y] = "";
      }
    }
  }
}

const twoInARow = (grid) => {
  //TODO: create threat.
  return null;
}

const oppositeCorner = (grid) => {
  if (grid[0][0] === "X" && grid[2][2] === "") {
    return [2, 2];
  }

  if (grid[2][2] === "X" && grid[0][0] === "") {
    return [0, 0];
  }

  if (grid[0][2] === "X" && grid[2][0] === "") {
    return [2, 0];
  }

  if (grid[2][0] === "X" && grid[0][2] === "") {
    return [0, 2];
  }
}

const emptySquares = (grid, corner) => {
  const corners = [
    [0, 0],
    [0, 2],
    [2, 0],
    [2, 2]
  ];

  const sides = [
    [0, 1],
    [1, 0],
    [1, 2],
    [2, 1]
  ];

  const squares = (corner) ? corners : sides;

  for (const s in squares) {
    const x = sides[s[0]];
    const y = sides[s[1]];
    if (grid[x][y] === "") {
      return [x, y];
    }
  }
}

const randomPlay = (grid) => {
  let x = Math.floor((Math.random() * 3));
  let y = Math.floor((Math.random() * 3));

  while (grid[x][y] !== "") {
    x = Math.floor((Math.random() * 3));
    y = Math.floor((Math.random() * 3));
  }

  return [x, y];
}

const getAllLines = (grid) => [
  ...grid, [grid[0][0], grid[1][0], grid[2][0]],
  [grid[0][1], grid[1][1], grid[2][1]],
  [grid[0][2], grid[1][2], grid[2][2]],
  [grid[0][0], grid[1][1], grid[2][2]],
  [grid[0][2], grid[1][1], grid[2][0]]
];