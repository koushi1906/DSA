function productArray(arr) {
  let prefixSum = [];
  let prefix = 1;

  for (let i = 0; i < arr.length; i++) {
    prefixSum[i] = prefix * arr[i];
    prefix *= arr[i];
  }

  let suffix = 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    prefixSum[i] *= suffix;
    suffix = arr[i];
  }

  return prefixSum;
}
