// with dummy node
function mergeTwoSortedList(list1, list2) {
  let dummy = new ListNode(0);
  let curr = dummy;

  while (list1 && list2) {
    if (list1.val < list2.val) {
      curr.next = list1;
      list1 = list1.next;
    } else {
      curr.next = list2;
      list2 = list2.next;
    }
    curr = curr.next;
  }
  curr.next = list1 || list2;
  return dummy.next;
}

// recursive approach
function recursiveSolution(list1, list2) {
  if (!list1) return list2;
  if (!list2) return list1;
  if (list1.val < list2.val) {
    list1.next = recursiveSolution(list1.next, list2);
    return list1;
  } else {
    list2.next = recursiveSolution(list1, list2.next);
    return list2;
  }
}
