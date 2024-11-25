function rightSideView(root) {
  let result = [];

  function dfs(node, level) {
    if (!node) return;

    if (result[level] === undefined) result[level] = node.val;

    dfs(node.right, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);

  return result;
}
