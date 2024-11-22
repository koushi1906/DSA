function maxDepth(root) {
  if (!root) return 0;
  let max = Math.max(maxDepth(root.left), maxDepth(root.right));
  return max + 1;
}
