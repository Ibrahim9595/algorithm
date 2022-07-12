class PriorityQueue:
    def __init__(self, isMax=False):
        self.heap = []
        self.MAX = -1 if isMax else 1

    def __str__(self):
        return str(self.heap)

    def __len__(self):
        return len(self.heap)

    def add(self, el):
        heappush(self.heap, el * self.MAX)

    def extract(self):
        return self.MAX * heappop(self.heap)

    def peek(self):
        return self.MAX * self.heap[0]
