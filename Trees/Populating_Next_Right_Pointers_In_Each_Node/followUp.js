function connect(root) {
  if (!root) return null;
  if (root.left) root.left.next = root.right ? root.right : nextNode(root);
  if (root.right) root.right.next = nextNode(root);

  connect(root.right);
  connect(root.left);

  return root;
}

function nextNode(node) {
  let next = node.next;
  while (next) {
    if (node.left) return node.left;
    if (node.right) return node.right;
    next = next.next;
  }
  return null;
}
