function ListNode(data) {
  this.data = data;
  this.next = null;
}

/**
 * convert a -> b -> null to a list
 * @param {string} s
 */
const parseList = (s) => {
  const l = s
    .replace(" ")
    .split("->")
    .map((el) => parseInt(el))
    .filter((el) => el);

  const head = l.length > 0 ? new ListNode(l[0]) : null;
  let curr = head;
  for (let i = 1; i < l.length; i++) {
    curr.next = new ListNode(l[i]);
    curr = curr.next;
  }

  return head;
};

const showList = (l, list) =>
  l === null
    ? list
    : showList(l.next, list ? `${list}->${l.data}` : `${l.data}`);

const kthElement = (head, k) => {
  if (head === null) return [null, 0];

  [ret, level] = kthElement(head.next, k);

  if (level === k - 1) return [head, level + 1];

  return [ret, level + 1];
};

const kthElementItr = (head, k) => {
  let curr = head,
    prev = head,
    i = 0;

  while (curr !== null) {
    if (i >= k) prev = prev.next;

    (curr = curr.next), i++;
  }

  return prev;
};

const deleteMiddle = (c) => {
  if (c === null && c.next === null) return;

  c.data = c.next.data;
  c.next = c.next.next;
};

const partition = (head, x) => {
  if (head === null) return head;

  curr = head.next;
  prev = head;

  while (curr !== null) {
    if (curr.data < x) {
      t = new ListNode(curr.data);
      t.next = head;
      head = t;
      prev.next = curr.next;
    } else {
      prev = curr;
    }

    curr = curr.next;
  }

  return head;
};

const partition1 = (ListNode, x) => {
  let head = ListNode;
  let tail = ListNode;

  while (ListNode != null) {
    next = ListNode.next;
    if (ListNode.data < x) {
      ListNode.next = head;
      head = ListNode;
    } else {
      tail.next = ListNode;
      tail = ListNode;
    }
    ListNode = next;
  }
  tail.next = null;

  return head;
};

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
const addTwoNumbers = (l1, l2) => {
  let head = null;
  let p = null;
  let c = 0;

  while (l1 !== null || l2 !== null) {
    const s = ((l1 || {}).data || 0) + ((l2 || {}).data || 0) + c;
    c = parseInt(s / 10);

    if (head === null) {
      head = new ListNode(s % 10);
      p = head;
    } else {
      p.next = new ListNode(s % 10);
      p = p.next;
    }

    l2 = l2 === null ? null : l2.next;
    l1 = l1 === null ? null : l1.next;
  }

  if (c !== 0) {
    p.next = new ListNode(c);
  }

  return head;
};

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
const addTwoNumbersRecursive = (l1, l2, c = 0) => {
  if (l1 === null && l2 === null && c === 0) return null;

  const s = ((l1 || {}).data || 0) + ((l2 || {}).data || 0) + c;
  const h = new ListNode(s % 10);
  h.next = addTwoNumbersRecursive(
    l1 ? l1.next : null,
    l2 ? l2.next : null,
    parseInt(s / 10)
  );

  return h;
};

/**
 *
 * @param {ListNode} n
 * @param {number} l
 * @returns {number}
 */
const listLength = (n, l = 0) => (n === null ? l : listLength(n.next, l + 1));

/**
 *
 * @param {ListNode} l1
 * @param {ListNode} l2
 */
const addTwoNumbersReversed = (l1, l2) => {
  const size1 = listLength(l1);
  const size2 = listLength(l2);
  const diff = Math.abs(size1 - size2);
  let [short, long] = size1 > size2 ? [l2, l1] : [l1, l2];

  for (let i = 0; i < diff; i++) {
    const n = new ListNode(0);
    n.next = short;
    short = n;
  }

  const recurse = (list1, list2) => {
    if (list1 === null && list2 === null) return [0, null];

    let [carry, outHead] = recurse(list1.next, list2.next);

    const s = list1.data + list2.data + carry;

    const n = new ListNode(s % 10);
    n.next = outHead;
    outHead = n;

    return [parseInt(s / 10), outHead];
  };

  let [carry, outHead] = recurse(short, long);

  if (carry !== 0) {
    const n = new ListNode(carry);
    n.next = outHead;
    outHead = n;
  }

  return outHead;
};

/**
 * @param {ListListNode} head
 * @return {boolean}
 */
const isPalindrome = (head) => {
  if (head === null) return false;

  const l = listLength(head);

  const recurse = (h, l, i) => {
    if (parseInt(l / 2) === i) return [l % 2 === 0 ? h : h.next, true];

    const [n, pred] = recurse(h.next, l, i + 1);

    return pred ? [n.next, n.data === h.data] : [null, false];
  };

  const [_, pred] = recurse(head, l, 0);

  return pred;
};

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB === null) return null;
  const sizeA = listLength(headA);
  const sizeB = listLength(headB);
  const diff = Math.abs(sizeA - sizeB);

  let [short, long] = sizeA > sizeB ? [headB, headA] : [headA, headB];

  for (let i = 0; i < diff; i++) {
    long = long.next;
  }

  while (short !== null && long !== null) {
    if (short === long) return short;
    short = short.next;
    long = long.next;
  }

  return null;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = (head) => {
  let slow = head;
  let fast = head;

  while (fast === null || fast.next === null) {
    slow = slow.next;
    fast = fast.next.next;
    if (fast === slow) break;
  }

  if (head === null || head.next === null) return null;

  slow = head;
  while (slow !== fast) {
    slow = slow.next;
    fast = fast.next;
  }

  return fast;
};

const l1 = parseList("1->1->1->1");
const l2 = parseList("1->2->a->2->1");

console.log(isPalindrome(l2));
