function numOfIslands(grid) {
  let m = grid.length;
  let n = grid[0].length;
  let islands = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === "1") {
        islands++;
        dfs(i, j, grid);
      }
    }
  }

  function dfs(row, col, grid) {
    if (grid[row][col] === "0") return;
    grid[row][col] = "0";

    if (row > 0 && grid[row - 1][col] === "1") dfs(row - 1, col, grid);
    if (row < m - 1 && grid[row + 1][col] === "1") dfs(row + 1, col, grid);
    if (col > 0 && grid[row][col - 1] === "1") dfs(row, col - 1, grid);
    if (col < n - 1 && grid[row][col + 1] === "1") dfs(row, col + 1, grid);
  }

  return islands;
}
