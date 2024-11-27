function kThSmallestElement(root) {
  let kThElement = null;

  function dfs(node) {
    if (!node) return;

    dfs(node.left);
    k--;
    if (k === 0) {
      kThElement = node.val;
    }
    dfs(node.right);
  }

  dfs(root);
  return kThElement;
}
