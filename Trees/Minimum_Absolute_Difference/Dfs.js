function minimumDiff(root) {
  let minDiff = Infinity;
  let prev = null;

  function dfs(node) {
    if (!node) return;
    dfs(node.left);
    if (prev !== null) {
      let diff = Math.abs(node.val - prev);
      minDiff = Math.min(minDiff, diff);
    }
    prev = node.val;
    dfs(node.right);
  }
  dfs(root);
  return minDiff;
}
