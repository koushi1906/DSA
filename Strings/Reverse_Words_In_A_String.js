function reverseWords(s) {
  s = s.trim();
  let wordsArray = s.split(" ").reverse();
  let filteredWords = wordsArray.filter((word) => word !== "");
  return filteredWords.join(" ");
}
