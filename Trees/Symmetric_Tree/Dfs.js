export default function SymmetricTree(root) {
  if (!root) return true;

  const check = (a, b) => {
    if (!a && !b) return true;
    if (!a || !b) return false;
    if (a.val !== b.val) return false;

    return check(a.left, b.right) && check(a.right, b.left);
  };

  return check(root.left, root.right);
}
