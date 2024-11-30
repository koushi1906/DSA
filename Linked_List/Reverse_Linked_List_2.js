function reverseList(head, left, right) {
  if (!head || left === right) return head;

  let dummy = new LisNode(0, head);
  let preLeft = dummy,
    curr = head;

  for (let i = 1; i < left; i++) {
    preLeft = preLeft.next;
    curr = curr.next;
  }

  let breakPoint = curr;
  let prev = null;

  for (let i = 0; i < right - left + 1; i++) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  preLeft.next = prev;
  breakPoint.next = curr;

  return dummy.next;
}
