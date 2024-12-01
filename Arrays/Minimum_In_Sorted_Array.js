function findMinimum(arr) {
  let start = 0,
    end = arr.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] <= arr[end]) end = mid;
    else start = mid + 1;
  }

  return arr[start];
}
