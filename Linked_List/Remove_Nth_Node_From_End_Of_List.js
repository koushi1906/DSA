function removeNthNodeFromEnd(head, n) {
  let dummy = new ListNode(0, head);
  let left = dummy;
  for (let i = 0; i < n; i++) {
    head = head.next;
  }

  while (head) {
    head = head.next;
    left = left.next;
  }

  left.next = left.next.next;
  return dummy.next;
}
