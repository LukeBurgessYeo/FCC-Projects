export const AIChoice = (g) => {
  let x = Math.floor((Math.random() * 3));
  let y = Math.floor((Math.random() * 3));

  while (g[x][y] !== "") {
    x = Math.floor((Math.random() * 3));
    y = Math.floor((Math.random() * 3));
  }

  return [x, y];
}

export const CheckForWin = (g) => {
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
    if (lines[line] === "XXX" || lines[line] === "OOO") {
      return "W";
    }
  }

  if (lines.slice(0, 3).join("").length === 9) {
    return "D";
  }

  return "";
}