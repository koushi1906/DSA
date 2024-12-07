function search_range(nums, target) {
  let start = 0,
    end = nums.length - 1;
  let startInd = -1,
    endInd = -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (nums[mid] > target) end = mid - 1;
    else if (nums[mid] < target) start = mid + 1;
    else {
      let ind1 = mid,
        ind2 = mid;
      while (nums[ind1 - 1] === target) ind1--;
      while (nums[ind2 + 1] === target) ind2++;

      return [ind1, ind2];
    }
  }

  return [startInd, endInd];
}
