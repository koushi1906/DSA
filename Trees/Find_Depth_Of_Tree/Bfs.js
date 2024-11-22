function maxDepth(root) {
  let depth;
  let queue = [root];
  if (!root) return 0;

  while (queue.length) {
    let length = queue.length;

    for (let i = 0; i < length; i++) {
      let currNode = queue.shift();

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }

    depth++;
  }

  return depth;
}
