function validAnagram(s, t) {
  if (s.length !== t.length) return false;
  let freqMap = new Map();

  for (let i = 0; i < s.length; i++) {
    freqMap.set(s[i], (freqMap.get(s[i]) || 0) + 1);
  }

  for (let i = 0; i < t.length; i++) {
    let char = t[i];
    if (!freqMap.has(char) || freqMap.get(char) === 0) return false;
    freqMap.set(char, freqMap.get(char) - 1);
  }

  return true;
}
