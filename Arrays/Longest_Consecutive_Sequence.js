function longestSequence(nums) {
  let set = new Set(nums);
  let maxSequence = 0;

  for (let num of set) {
    if (set.has(num - 1)) continue;
    let currMax = 1;
    let curr = num;

    while (set.has(curr + 1)) {
      curr += 1;
      currMax += 1;
    }

    maxSequence = Math.max(maxSequence, currMax);
  }

  return maxSequence;
}
