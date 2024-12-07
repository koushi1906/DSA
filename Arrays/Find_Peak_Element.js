function peakElement(arr) {
  let start = 0,
    end = arr.length - 1;

  if (arr[start] > arr[start + 1] || end === 0) return 0;
  if (arr[end] > arr[end - 1]) return end;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let prev = arr[mid - 1] || -Infinity;
    let next = arr[mid + 1] || -Infinity;

    if (arr[mid] > prev && arr[mid] > next) return mid;
    else if (arr[mid] > prev) start = mid + 1;
    else end = mid - 1;
  }
}
