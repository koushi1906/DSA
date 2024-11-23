function nextPointers(root) {
  let currNode = root;
  let nextNode = root ? root.left : null;

  while (currNode && nextNode) {
    currNode.left.next = prevNode.right;

    if (currNode.next) {
      currNode.right = currNode.next.left;
    }
    currNode = currNode.next;
    if (!currNode) {
      currNode = nextNode;
      nextNode = currNode.left;
    }
  }

  return root;
}
