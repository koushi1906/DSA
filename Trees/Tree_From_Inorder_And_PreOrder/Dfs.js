export default function TreeFromInOrderAndPreOrder(inOrder, preOrder) {
  if (!inOrder.length || !preOrder.length) return null;
  let root = new TreeNode(preOrder[0]);
  let mid = inOrder.indexOf(preOrder[0]);

  root.left = TreeFromInOrderAndPreOrder(
    inOrder.slice(0, mid),
    preOrder.slice(1, mid + 1)
  );
  root.right = TreeFromInOrderAndPreOrder(
    inOrder.slice(mid + 1),
    preOrder.slice(mid + 1)
  );
}
