function longestCharacterReplacement(s, k) {
  let maxLength = 0,
    maxFreq = 0,
    left = 0;
  let freqMap = new Map();

  for (let right = 0; right < s.length; right++) {
    freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);
    maxFreq = Math.max(maxFreq, freqMap.get(s[right]));

    if (right - left + 1 - maxFreq > k) {
      freqMap.set(s[left], freqMap.get(s[left]) - 1);
      left++;
    }

    maxLength = Math.max(maxLength, right - left + 1);
  }

  return maxLength;
}
