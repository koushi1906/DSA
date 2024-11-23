function nextPointers(root) {
  let queue = [root];

  while (queue.length) {
    let length = queue.length;
    let prevNode = null;

    for (let i = 0; i < length; i++) {
      let currNode = queue.shift();

      if (prevNode) prevNode.next = currNode;
      prevNode = currNode;

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    if (prevNode) prevNode.next = null;
  }

  return root;
}
