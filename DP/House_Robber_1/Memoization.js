function houseRobber(nums) {
  let memo = [];

  function dp(ind) {
    if (ind === 0) return nums[0];
    if (ind < 0) return 0;

    if (memo[ind]) return memo[ind];

    let pick = nums[ind] + dp(ind - 2);
    let noPick = 0 + nums[ind - 1];

    memo[ind] = Math.max(pick, noPick);
    return memo[ind];
  }

  return dp[nums.length - 1];
}
