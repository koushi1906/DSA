function minimumDiff(root) {
  let minDiff = Infinity;
  let queue = [root];
  let nodeVals = [];

  while (queue.length) {
    let size = queue.length;

    for (let i = 0; i < size; i++) {
      let currElement = queue.shift();
      nodeVals.push(currElement.val);

      if (currElement.left) queue.push(currElement.left);
      if (currElement.right) queue.push(currElement.right);
    }
  }

  for (let i = 0; i < nodeVals.length; i++) {
    for (let j = i + 1; j < nodeVals.length; j++) {
      minDiff = Math.min(minDiff, Math.abs(nodeVals[i] - nodeVals[j]));
    }
  }
}
