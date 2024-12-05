function groupAnagrams(strArray) {
  let result = [];
  let map = new Map();

  for (let i = 0; i < strArray.length; i++) {
    let sortedStr = sortString(strArray[i]);

    if (!map.has(sortString)) map.set(sortString, [s[i]]);
    else map.get(sortedStr).push(s[i]);
  }

  function sortString(str) {
    return str.split("").sort().join("");
  }

  for (let [keys, values] of map) {
    result.push(values);
  }

  return result;
}

// Improvement :- Take an array with 26 characters and increase count of char in the array for the str and use this as key as this eliminates sorting
