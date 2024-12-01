function isDuplicate(arr) {
  let set = new Set(arr);
  return set.size < arr.length;
}
