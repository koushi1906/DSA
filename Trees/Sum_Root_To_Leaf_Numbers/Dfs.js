function sumNumbers(root) {
  let result = 0;

  function dfs(node, str) {
    if (!node) return;
    let currNodeVal = str + node.val;
    if (!node.left && !node.right) result += parseInt(str);

    dfs(node.left, currNodeVal);
    dfs(node.right, currNodeVal);
  }

  dfs(root, "");
}
