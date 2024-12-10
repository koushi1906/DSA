function houseRobber(nums) {
  let memo = [];
  memo[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let take = nums[i];
    if (ind > 1) take += dp[ind - 2];
    let noTake = dp[ind - 1];

    dp[ind] = Math.max(take, noTake);
  }

  return dp[nums.length - 1];
}
