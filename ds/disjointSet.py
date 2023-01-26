class DisjSet:
    def __init__(self, n):
        self.parent = [i for i in range(n)]
        self.rank = [1] * n

    def find(self, k):
        if self.parent[k] != k:
            self.parent[k] = self.find(self.parent[k])

        return self.parent[k]

    def uion(self, i, j):
        repI = self.find(i)
        repJ = self.find(j)

        rankI = self.rank[repI]
        rankJ = self.rank[repJ]

        if repI == repJ:
            return

        if rankI >= rankJ:
            self.parent[repJ] = repI
            self.rank[repI] += 1
        else:
            self.parent[repI] = repJ
            self.rank[repJ] += 1
