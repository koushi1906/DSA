function isValid(str) {
  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (s[i] === "{" || s[i] === "[" || s[i] === "(") stack.push(s[i]);
    else if (!isPair(stack.pop(), s[i])) return false;
  }

  function isPair(start, end) {
    let validPair = {
      "{": "}",
      "(": ")",
      "[": "]",
    };

    if (validPair[start] !== end) return false;
    return true;
  }

  return stack.length === 0;
}
