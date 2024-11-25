function zigzag_order_traversal(root) {
  let result = [];
  if (!root) return result;
  let queue = [root];
  let isZigzag = false;

  while (queue.length) {
    let size = queue.length;
    let levelElements = [];

    for (let i = 0; i < size; i++) {
      let currElement = queue.shift();
      levelElements.push(currElement);

      if (currElement.left) queue.push(currElement.left);
      if (currElement.right) queue.push(currElement.right);
    }

    isZigzag
      ? result.push(levelElements.reverse())
      : result.push(levelElements);
    isZigzag != isZigzag;
  }

  return result;
}
