function maximumSubArray(nums) {
  let max = 0,
    currSum = 0;

  for (let i = 0; i < nums.length; i++) {
    currSum = Math.max(currSum + nums[i], 0);
    max = Math.max(currSum, max);
  }

  return max;
}
