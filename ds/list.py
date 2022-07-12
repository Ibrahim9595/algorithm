class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

    def __str__(self):
        c = self
        acc = ""

        while c != None:
            acc += str(c.val) + " -> "
            c = c.next

        acc += "None"

        return acc


class List:
    def __init__(self):
        self.head = None
        self.tail = None

    def preAppend(self, data):
        newNode = ListNode(data)
        if self.head == None:
            self.head = newNode
            self.tail = newNode

        else:
            newNode.next = self.head
            self.head = newNode

    def append(self, data):
        newNode = ListNode(data)

        if self.tail == None:
            self.head = newNode
            self.tail = newNode
        else:
            self.tail.next = newNode
            self.tail = newNode

    def popLeft(self):
        if self.head == None:
            return None

        d = self.head

        self.head = self.head.next

        if self.head == None:
            self.tail = None

        return d

        def remove(self, key):
            if self.head == None:
                return None

            if self.head.val == key:
                return self.popLeft()

            f, s = self.head.next, self.head

            while f != None:
                if f.val == key:
                    d = f
                    s.next = f.next

                    return d

                s = f
                f = f.next

            return None

    def pop(self):
        if self.head == None:
            return None

        if self.head.next == None:
            return self.popLeft()

        h = self.head
        while h.next.next != None:
            h = h.next


        d = h.next
        h.next = None

        return d

    def __str__(self):
        return str(self.head)


def createLinkedList(arr):
    if len(arr) == 0:
        return None

    h, *t = arr

    return ListNode(h, createLinkedList(t))
