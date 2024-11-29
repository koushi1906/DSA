function addTwoNumbers(l1, l2) {
  let head = new ListNode(0);
  let curr = head;
  let remainder = 0;

  while (l1 || l2) {
    let x1 = l1 ? l1.val : 0;
    let x2 = l2 ? l2.val : 0;
    let sum = x1 + x2 + remainder;

    curr.next = new ListNode(sum % 10);
    remainder = Math.floor(sum / 10);

    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
    curr = curr.next;
  }

  if (remainder > 0) {
    curr.next = new ListNode(remainder);
  }

  return head.next;
}
