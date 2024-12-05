function palindromicSubstrings(s) {
  let palindromesCount = 0;

  function generatePalindromes(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      palindromesCount++;
      left--;
      right++;
    }
  }

  for (let i = 0; i < s.length; i++) {
    generatePalindromes(s, i, i);
    generatePalindromes(s, i, i + 1);
  }

  return palindromesCount;
}
