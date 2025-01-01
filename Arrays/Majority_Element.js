function majorityElement(nums) {
  let maxFreqNumber;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    if (count == 0) {
      maxFreqNumber = nums[i];
      count = 1;
    } else if (nums[i] === maxFreqNumber) count++;
    else count--;
  }

  return maxFreqNumber;
}
