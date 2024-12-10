function houseRobber2(nums) {
  function rob(arr) {
    let cache = [];
    cache[0] = arr[0];

    for (let i = 1; i < arr.length; i++) {
      let take = arr[i];
      if (i > 1) take += cache[i - 2];
      let noTake = cache[i - 1];

      cache[i] = Math.max(take, noTake);
    }

    return cache[arr.length - 1];
  }

  let case1 = rob(nums.slice(0, nums.length - 1));
  let case2 = rob(nums.slice(1, nums.length));

  return Math.max(case1, case2);
}
