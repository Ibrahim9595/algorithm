


# Number of nodes = 2 * n - 1 because it is a full binary tree (N leaf nodes, N - 1 internal nodes) 
class SegmentTree:
    def __init__(self, arr):
        self.n = len(arr)
        self.arr = arr.copy()
        self.tree = [0] * (2 * self.n - 1)

        def construct(s, e, parent):
            if s == e:
                self.tree[parent] = self.arr[s]
                return self.tree[parent]

            mid = (s + e) // 2

            self.tree[parent] = min(construct(s, mid, 2 * parent + 1) , construct(mid + 1, e, 2 * parent + 2))
            
            return self.tree[parent]

        construct(0, self.n - 1, 0)


    def getMin(self, s, e):
        
        def rec(i, rangeStart, rangeEnd):
            # Total overlap
            #   rangeS---------rangeE
            # s-------------------------e
            if rangeStart >= s and rangeEnd <= e:
                return self.tree[i]
            
            # No overlap
            #          rangeS-----------rangeE
            #s----e                             s-----e
            if e < rangeStart or s > rangeEnd:
                return float('inf')

            # Partial overlap
            mid = (rangeStart + rangeEnd) // 2
            return min(rec(2 * i + 1, rangeStart, mid) , rec(2 * i + 2, mid + 1, rangeEnd))

        return rec(0, 0, self.n - 1)

    def update(self,newValue, pos):
        self.arr[pos] = newValue

        def rec(i, s, e):
            if pos > e or s > pos:
                return

            
            self.tree[i] = min(self.tree[i], newValue)

            if s != e:
                mid = (s + e) // 2
                rec(2 * i + 1, s, mid)
                rec(2 * i + 2, mid + 1, e)

        rec(0, 0, self.n - 1)



s = SegmentTree([1,2,3,4,5])

print(s.tree)
s.update(-1, 2)

print(s.getMin(1, 1))
