function flattenTree(root) {
  let prev = null;
  function flattenSubTree(node) {
    if (!node) return;

    flattenSubTree(node.right);
    flattenSubTree(node.left);

    node.right = prev;
    node.left = null;
    prev = node;
  }
  flattenSubTree(root);
}
