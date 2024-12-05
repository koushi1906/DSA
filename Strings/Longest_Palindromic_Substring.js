function longestPalindromicSubString(s) {
  let longestSubstring = "";

  function longestPalindrome(str, left, right) {
    while (left > 0 && right < str.length && str[left] === str[right]) {
      left--;
      right++;
    }

    return str.slice(left + 1, right);
  }

  for (let i = 0; i < s.length; i++) {
    let oddPalindrome = longestPalindrome(s, i, i);
    let evenPalindrome = longestPalindrome(s, i, i + 1);

    if (oddPalindrome.length > longestSubstring.length)
      longestSubstring = oddPalindrome;
    if (evenPalindrome.length > longestSubstring.length)
      longestSubstring = evenPalindrome;
  }

  return longestSubstring;
}
