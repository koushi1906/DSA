export function buildTree(inOrder, postOrder) {
  if (!inOrder.length || !postOrder.length) return null;

  let rootElement = postOrder.pop();
  let root = new TreeNode(rootElement);
  let mid = inOrder.indexOf(rootElement);

  root.right = buildTree(inOrder.slice(mid + 1), postOrder);
  root.left = buildTree(inOrder.slice(0, mid), postOrder);

  return root;
}
