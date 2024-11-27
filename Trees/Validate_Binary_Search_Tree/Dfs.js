function validateTree(root) {
  function dfs(node, min, max) {
    if (!node) return true;

    if (node.val <= min || node.val >= max) return false;

    let left = dfs(node.left, min, node.val);
    let right = dfs(node.right, node.val, max);

    return left && right;
  }

  return dfs(root, -Infinity, Infinity);
}
