class Heap:
    def __init__(self):
        self.heap = []

    
    def getParent(self, index: int) -> int:
        return (index - 1) // 2

    def getChildren(self, index: int) -> Tuple[int]:

        return (index * 2)+ 1, (index * 2) + 2

    def siftUp(self, index: int):
        curr = index
        while True:
            parent = self.getParent(curr)
            if parent < 0 or self.heap[parent] < self.heap[curr]:
                break

            self.heap[curr], self.heap[parent] = self.heap[parent], self.heap[curr]
            curr = parent

    def siftDown(self, index: int):
        curr = index

        while curr < len(self.heap):
            left, right = self.getChildren(curr)

            if left >= len(self.heap):
                break

            selectedIndex = left if right >= len(self.heap) or self.heap[left] < self.heap[right] else right
            
            selectedIndex = selectedIndex if self.heap[selectedIndex] < self.heap[curr] else -1

            if selectedIndex == -1:
                break

            self.heap[selectedIndex], self.heap[curr] = self.heap[curr], self.heap[selectedIndex]
            curr = selectedIndex

    def add(self, value):
        self.heap.append(value)
        self.siftUp(len(self.heap) - 1)

    def pop(self):
        self.heap[0], self.heap[-1] = self.heap[-1], self.heap[0]
        res = self.heap.pop()
        self.siftDown(0)
        return res

    def peak(self):
        return self.heap[0]


