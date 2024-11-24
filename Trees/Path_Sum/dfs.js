function pathSum(root, targetSum) {
  if (!root) return false;
  if (!root.left && !root.right && targetSum - root.val === 0) return true;

  return (
    pathSum(root.left, targetSum - root.val) ||
    pathSum(root.right, targetSum - root.val)
  );
}
