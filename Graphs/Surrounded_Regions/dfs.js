function surroundedRegions(board) {
  let m = board.length;
  let n = board[0].length;

  function dfs(row, col) {
    if (row < 0 || col < 0) return;
    if (row > m - 1 || col > n - 1) return;
    if (board[row][col] === "X") return;
    if (board[row][col] === "#") return;

    board[row][col] = "#";

    if (board[row - 1][col] === "O") dfs(row - 1, col);
    if (board[row + 1][col] === "O") dfs(row + 1, col);
    if (board[row][col - 1] === "O") dfs(row, col - 1);
    if (board[row][col + 1] === "O") dfs(row, col + 1);
  }

  for (let i = 0; i < n; i++) {
    if (board[0][i] === "O") dfs(0, i);
  }

  for (let i = 0; i < n; i++) {
    if (board[m - 1][i] === "O") dfs(m - 1, i);
  }

  for (let i = 0; i < m; i++) {
    if (board[i][0] === "O") dfs(i, 0);
  }

  for (let i = 0; i < m; i++) {
    if (board[i][n - 1] === "O") dfs(i, n - 1);
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j] === "#") board[i][j] = "O";
      if (board[i][j] === "O") board[i][j] = "X";
    }
  }
}
