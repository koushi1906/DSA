function threeSum(arr) {
  let result = [];
  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0 && arr[i] === arr[i - 1]) continue;
    let j = i + 1,
      k = arr.length - 1;

    while (j < k) {
      let currSum = arr[i] + arr[j] + arr[k];
      if (currSum > 0) {
        k--;
      } else if (currSum < 0) {
        j++;
      } else {
        result.push([arr[i], arr[j], arr[k]]);
        while (arr[j] === arr[j + 1]) j++;
        while (arr[k] === arr[k - 1]) k--;
        j++;
        k--;
      }
    }
  }

  return result;
}
