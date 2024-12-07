function searchMatrix(matrix, target) {
  let m = matrix.length,
    n = matrix[0].length;
  let start = 0,
    end = m * n - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    let row = Math.floor(mid / n);
    let col = mid % n;

    let currElement = matrix[row][col];
    if (currElement === target) return true;
    else if (currElement > target) end = mid - 1;
    else start = mid + 1;
  }

  return false;
}
