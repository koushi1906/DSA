function maxTreeSum(root) {
  let maxSum = -Infinity;

  function dfs(node) {
    if (!node) return 0;

    let left = Math.max(0, dfs(node.left));
    let right = Math.max(0, dfs(node.right));

    let totalSum = left + right + node.val;
    maxSum = maxSum > totalSum ? maxSum : totalSum;

    return Math.max(left, right) + node.val;
  }

  dfs(root);
  return maxSum;
}
