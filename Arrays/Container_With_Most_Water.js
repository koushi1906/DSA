function maxArea(heights) {
  let maxArea = 0;
  let start = 0,
    end = heights.length - 1;

  while (start < end) {
    let currArea = Math.min(heights[start], heights[end]) * (end - start);
    maxArea = Math.max(currArea, maxArea);
    if (heights[start] <= heights[end]) start++;
    else end--;
  }

  return maxArea;
}
