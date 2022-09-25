from collections import Counter, defaultdict, deque
from typing import List, Set, Tuple, Optional, Dict
from pqdict import pqdict


class Edge:
    def __init__(self, to, cost):
        self.to = to
        self.cost = cost

    def __str__(self):
        return "to=" + str(self.to) + ", costs=" + str(self.cost)


class UndirectedGraph:
    def __init__(self):
        self.g = defaultdict(list)

    def listToGraph(self, edges, costs) -> "UndirectedGraph":
        for (source, to), cost in zip(edges, costs):
            self.addEdge(source, to, cost)

        return self

    def listToGraphUndirected(self, edges, costs) -> "UndirectedGraph":
        for (v1, v2), cost in zip(edges, costs):
            self.addEdgeUndirected(v1, v2, cost)

        return self

    def addEdge(self, source, to, cost):
        self.g[source].append(Edge(to, cost))

    def addEdgeUndirected(self, v1, v2, cost):
        self.g[v1].append(Edge(v2, cost))
        self.g[v2].append(Edge(v1, cost))

    def getEdges(self, source) -> List["Edge"]:
        return self.g[source]

    def __str__(self):
        res = []
        for k in self.g:
            res.append(str(k) + " -> " + str([str(e)
                       for e in self.getEdges(k)]))

        return "\n".join(res)


def dijkstra(g: "UndirectedGraph", s, n):
    dist = [float('inf')] * n
    visited = set()
    pq = pqdict()

    dist[s] = 0
    pq[s] = 0

    while pq:
        source, minVal = pq.popitem()
        visited.add(source)

        if minVal > dist[source]:
            continue

        for edge in g.getEdges(source):
            if edge.to in visited:
                continue

            nextDist = minVal + edge.cost

            if nextDist > dist[edge.to]:
                dist[edge.to] = nextDist
                pq[edge.to] = nextDist

    return dist


def floyedWarshal(n: int, m: List[List[int]]):
    # Setup 
    db = [[m[row][col] for col in range(n)] for row in range(n)]
    # next = [[col if m[row][col] != float('inf') else float('inf') for col in range(n)] for row in range(n)]

    for k in range(n):
        for i in range(n):
            for j in range(n):
                if db[i][j] > db[i][k] + db[k][j]:
                    db[i][j] = db[i][k] + db[k][j]
                    #next[i][j] = next[i][k]

    # detect negative cycles by running the algorithm again and check if there still relaxations

    return db





UNVISTED = -1
class Tarjan:
    def tarjan(self, n: int, edges: List[List[int]]):
        g = defaultdict(list)
        ids = [UNVISTED] * n
        low = [0] * n
        stack = []
        onStack = [False] * n
        self.id = 0


        def dfs(at):
            stack.append(at)
            onStack[at] = True
            ids[at] = low[at] = self.id
            self.id += 1

            edges = g[at]

            for to in edges:
                if ids[to] == UNVISTED: dfs(to)
                # if the node is on stack it means it is part of its SCC
                if onStack[to]: low[at] = min(low[to], low[at])

            
            # if the current node (at) is the start of scc
            if ids[at] == low[at]:
                while stack:
                    node = stack.pop()
                    onStack[node] = False
                    
                    low[node] = ids[at]

                    if node == at:
                        break

                print("NEW SCC start at " + str(at))


        for f, t in edges:
            g[f].append(t)

        
        for i in range(n):
            if ids[i] == UNVISTED:
                dfs(i)

        
        return low

        

edges = [[0, 1], [1, 2], [2, 0], [3, 4], [3, 7], [4,5], [5,0], [5, 6], [6,0], [6,2], [6,4], [7,5], [7,3]]

"""
For articulation points there are 2 conditions 
1. when a node gets a back-edge it is an articulation point if id[at] <= low[to] ( < for bridges == is for root of a cycle)
2. for cycle root it is an articulation points if it has 2 or more outgoing edges
"""

# class Solution:
#     def test(self, l):
#         g = defaultdict(list)
#         for v1, v2 in l:
#             g[v1].append(v2)
#             g[v2].append(v1)

#         n = len(g)
#         self.outgoing = 0
#         self._id = 0
#         visited = set()
#         ids = [0] * n
#         bridges = []
#         low = [0] * n
#         isArt = [False] * n

#         def dfs(at, parent, bridges):
#             visited.add(at)
#             low[at] = ids[at] = self._id
#             self._id += 1

#             edges = g[at]

#             for edge in edges:
#                 if edge == parent: continue
#                 if edge not in visited:
#                     dfs(edge, at, bridges)
#                     low[at] = min(low[at], low[edge])
#                     if low[edge] > ids[at]:
#                         bridges.append((at, edge))
#                         isArt[at] = True
#                    if low[edge] == ids[at]:
#                         isArt[at] = True
#                 else:
#                     low[at] = min(low[at], ids[edge])

#         for i in range(n):
#             if i not in visited:
#                 self.outgoing = 0
#                 dfs(i, -1, bridges)
#                 isArt[i] = self.outgoing > 1

#         return bridges
