function longestSubstring(s) {
  let left = 0,
    right = 0;
  let maxLength = 0;
  let map = new Map();

  while (right < s.length) {
    if (map.has(s[right])) {
      left = Math.max(left, map.get(s[right] + 1));
    }
    map.set(s[right], right);
    maxLength = Math.max(maxLength, right - left + 1);
    right++;
  }

  return maxLength;
}
