function removeDuplicates(head) {
  let dummy = new ListNode(0, head);
  let prev = dummy;
  let curr = head;

  while (curr) {
    if (curr.next && curr.val === curr.next.val) {
      while (curr.next && curr.val === curr.next.val) {
        curr = curr.next;
      }
      prev.next = curr;
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return dummy.next;
}
