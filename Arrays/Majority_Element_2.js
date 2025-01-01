function majorityElements(nums) {
  let candidate1, candidate2;
  let result = [];
  let minCount = Math.floor(nums.length / 3);
  let count1 = 0,
    count2 = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === candidate1) {
      count1++;
    } else if (nums[i] === candidate2) {
      count2++;
    } else if (count1 === 0 && nums[i] !== candidate2) {
      candidate1 = nums[i];
      count1 = 1;
    } else if (count2 === 0 && nums[i] !== candidate2) {
      candidate2 = nums[i];
      count2 = 1;
    } else {
      count1--;
      count2--;
    }
  }

  count1 = 0;
  count2 = 0;

  nums.forEach((num) => {
    if (num === candidate1) count1++;
    if (num === candidate2) count2++;
  });

  if (count1 > minCount) result.push(candidate1);
  if (count2 > minCount) result.push(candidate2);

  return result;
}
