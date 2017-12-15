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
  const result = findWinningSpace(grid);

  if (result) return result;

  return randomPlay(grid);
}

const findWinningSpace = (grid) => {
  const allLines = getAllLines(grid);

  for (const line in allLines) {
    if (allLines[line].join("") === "OO") {
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
  ...grid,
  [grid[0][0], grid[1][0], grid[2][0]],
  [grid[0][1], grid[1][1], grid[2][1]],
  [grid[0][2], grid[1][2], grid[2][2]],
  [grid[0][0], grid[1][1], grid[2][2]],
  [grid[0][2], grid[1][1], grid[2][0]]
];