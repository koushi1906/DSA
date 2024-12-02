function rotate(arr, k) {
  let n = arr.length;
  k %= n;

  function reverse(start, end) {
    while (start <= end) {
      let temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;

      start++;
      end--;
    }
  }
  reverse(0, n - k - 1);
  reverse(n - k, n - 1);
  reverse(0, n - 1);
  return arr;
}
