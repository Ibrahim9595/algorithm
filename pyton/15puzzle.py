"""
Note p: for permutation ex: [1, 2, 3, 4, 5, 6, 0, 7, 8]
"""

from time import time_ns
from math import sqrt
from random import shuffle
from queue import PriorityQueue


def is_even(p: list) -> bool:
    inversions = 0
    for i in range(len(p) - 1):
        for j in range(i, len(p)):
            if p[i] > p[j] and p[j] != 0:
                inversions += 1

    return inversions % 2 == 0


def manhatenDist(p: int) -> int:
    SIZE = int(sqrt(len(p)))
    dist = 0

    for i, el in enumerate(p):
        if (el != 0):
            row, col = (el-1) // SIZE, (el-1) % SIZE
            goal_row, goal_col = i // SIZE, i % SIZE

            dist += abs(row - goal_row) + abs(col - goal_col)

    return dist


def applyMoves(p: list, blank: int, path: list) -> list:
    res = []
    l = int(sqrt(len(p)))
    MOVES = [1, -1, l, -l]

    if blank % l == 0:
        MOVES = [1, l, -l]
    elif (blank + 1) % l == 0:
        MOVES = [-1, l, -l]

    for move in MOVES:
        if move + blank < len(p) and move + blank >= 0:
            copy = p.copy()
            changed = copy[move + blank]
            copy[move + blank], copy[blank] = copy[blank], copy[move + blank]
            res.append((
                manhatenDist(copy) + len(path) + 1,
                path + [move + blank],
                copy,
                move + blank
            ))

    return res


def getKey(p: list):
    return "".join(list(map(lambda x: str(x), p)))


def solution(p: list) -> list:
    if not is_even(p):
        return False

    visited = {}
    q = PriorityQueue()
    q.put((0, [p.index(0)], p, p.index(0)))
    goal = getKey(list(range(1, len(p))) + [0])

    while not q.empty():
        _, path, curr, blank = q.get()

        if getKey(curr) == goal:
            return path

        if getKey(curr) not in visited:
            visited[getKey(curr)] = True
            for nextState in applyMoves(curr, blank, path):
                q.put(nextState)


if __name__ == '__main__':
    p = list(range(1, 16))
    shuffle(p)
    p = p + [0]
    p = [ 6, 4, 0, 5, 8, 3, 1, 7, 2 ]
    print(is_even(p))
    print(p)
    start = time_ns()
    print(solution(p))
    print(str((time_ns() - start) // 1000000) + " ms")
