function rightSideView(root) {
  let result = [];
  let queue = [root];
  if (!root) return result;

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let currNode = queue.shift();

      if (i === size - 1) result.push(currNode.val);

      if (currNode.left) queue.push(currNode.left);
      if (currNode.right) queue.push(currNode.right);
    }
  }

  return result;
}
