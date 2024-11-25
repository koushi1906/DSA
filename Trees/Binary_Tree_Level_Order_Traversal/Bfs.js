function levelOrderTraversal(root) {
  let result = [];
  if (!root) return result;
  let queue = [root];

  while (queue.length) {
    let size = queue.length;
    let levelNodes = [];

    for (let i = 0; i < size; i++) {
      let currElement = queue.shift();

      levelNodes.push(currElement.val);

      if (currElement.left) queue.push(currElement.left);
      if (currElement.right) queue.push(currElement.right);
    }

    result.push(levelNodes);
  }

  return result;
}
