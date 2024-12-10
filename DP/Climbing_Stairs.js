function climbStairs(n) {
  if (n === 1) return 1;
  let prev = 1,
    curr = 1;

  for (let i = 1; i < n; i++) {
    let next = prev + curr;
    prev = curr;
    curr = next;
  }

  return curr;
}
