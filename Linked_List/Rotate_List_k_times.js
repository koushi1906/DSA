function rotateList(head, k) {
  if (!head || !head.next || k === 0) return head;
  let curr = head;
  let length = 1;

  while (curr.next) {
    length++;
    curr = curr.next;
  }
  k %= length;
  curr.next = head;
  let moves = length - k;

  for (let i = 0; i < moves; i++) curr = curr.next;
  head = curr.next;
  curr.next = null;
  return head;
}
