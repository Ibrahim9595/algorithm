from typing import List

class IndexedTree:
    def __init__(self, nums: List[int]):
        self.tree = [0] + nums.copy()
        self.nums = nums

        n = len(self.tree)

        for i in range(1, n - 1):
            j = i + self.LSB(i)
            if j < n:
                self.tree[j] += self.tree[i]

    def LSB(self, i: int):
        return i & -i

    def update(self, index: int, val: int) -> None:
        diff = val - self.nums[index]
        self.nums[index] = val

        i = index + 1
        n = len(self.tree)

        while i < n:
            self.tree[i] += diff
            i += self.LSB(i)
 
    def _sum(self, start: int) -> int:
        i = start
        s = 0
        while i > 0:
            s += self.tree[i]
            i -= self.LSB(i)

        return s

    def sumRange(self, left: int, right: int) -> int:
        # right + 1 because tree is 1-indexed
        return self._sum(right + 1) - self._sum(left)



