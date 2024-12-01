function maxProductArray(arr) {
  let max = arr[0];
  let curr_sum = arr[0];

  for (let i = 0; i < arr.length; i++) {
    curr_sum = Math.max(arr[i], curr_sum + arr[i]);
    max = Math.max(curr_sum, max);
  }
}
