function minimumWindow(s, t) {
  if (s.length < t.length || s.length === 0) return "";
  let freqMap = new Map();
  let minWindowString = "";
  let left = 0,
    right = 0,
    count = 0;

  for (let char of t) {
    freqMap.set(char, (freqMap.get(char) || 0) + 1);
  }

  while (right < s.length) {
    let char = s[right];
    if (freqMap.has(char)) {
      freqMap.set(char, freqMap.get(char) - 1);
      if (freqMap.get(char) >= 0) count++;
    }

    while (count === t.length) {
      let currWindow = s.slice(left, right + 1);
      let leftChar = s[left];

      if (freqMap.has(leftChar)) {
        freqMap.set(leftChar, freqMap.get(leftChar) + 1);
        if (freqMap.get(leftChar) > 0) count--;
      }

      if (minWindowString === "" || minWindowString.length > currWindow.length)
        minWindowString = currWindow;

      left++;
    }
    right++;
  }

  return minWindowString;
}
