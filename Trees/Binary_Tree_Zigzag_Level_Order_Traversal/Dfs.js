function zigZagTraversal(root) {
  let result = [];

  function dfs(node, level) {
    if (!node) return;

    if (result[level] === undefined) result[level] = [node.val];
    else result[level].push(node.val);

    dfs(node.left, level + 1);
    dfs(node.right, level + 1);
  }

  dfs(root, 0);

  for (let i = 0; i < result.length; i++) {
    if (i % 2 !== 0) result[i] = result[i].reverse();
  }

  return result;
}
