function median(nums1, nums2) {
  let len1 = nums1.length,
    len2 = nums2.length;
  let totalLen = len1 + len2;
  if (len1 > len2) return median(nums2, nums1);
  let low = 0,
    high = len1;
  let left = Math.floor((totalLen + 1) / 2);

  while (low <= high) {
    let mid1 = Math.floor(totalLen / 2);
    let mid2 = left - mid1;

    let l1 = mid1 > 0 ? nums1[mid1] : -Infinity;
    let l2 = mid2 > 0 ? nums2[mid2] : -Infinity;
    let r1 = mid1 < len1 ? nums1[mid1] : Infinity;
    let r2 = mid2 < len2 ? nums1[mid2] : Infinity;

    if (l1 <= r2 && l2 <= r1) {
      return totalLen % 2 === 0
        ? (Math.max(l1, l2) + Math.min(r1, r2)) / 2
        : Math.max(l1, l2);
    } else if (l1 > r2) {
      high = mid1 - 1;
    } else {
      low = mid1 + 1;
    }
  }

  return 0.0;
}
