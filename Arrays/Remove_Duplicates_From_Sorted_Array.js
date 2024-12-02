// Note:- We can atMost have a number twice
function removeDuplicates(arr) {
  let j = 0,
    count = 1;

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) count++;
    else count = 1;
    if (count <= 2) {
      arr[j] = arr[i];
      j++;
    }
  }
  return j;
}
