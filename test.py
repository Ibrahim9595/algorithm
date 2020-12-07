from queue import PriorityQueue
from random import shuffle
from math import sqrt


def change(amount):
    assert(amount >= 5)

    if amount % 7 == 0:
        return [7] * (amount // 7)
    if amount % 5 == 0:
        return [5] * (amount // 5)

    ret = change(amount - 5)
    ret.append(5)

    return ret


def sequence():
    word = [0, 3, 2, 4, 5, 6, 7, 1, 9, 8]
    goal = '0123456789'

    res = []

    for i, ch in enumerate(goal):
        j = word.index(ch)
        if i != j:
            res.append((i, j))
        word[i], word[j] = word[j], word[i]

    return res


def neighborSequence():
    word = 'M A R I N E'.split(' ')
    goal = 'AIRMEN'

    res = []

    for i, ch in enumerate(goal):
        j = word.index(ch)
        start = max(i, j)
        end = min(i, j)
        for k in range(start, end, -1):
            res.append((k-1, k))

            word[k-1], word[k] = word[k], word[k-1]

    return res


def inversions(p):
    res = 0
    for i in range(len(p) - 1):
        for j in range(i, len(p)):
            if int(p[i]) > int(p[j]) and int(p[j]) != 0:
                res += 1

    return res


def gridPrint(p):
    l = int(sqrt(len(p)))

    for i in range(l):
        for j in range(l):
            print(p[(i * l) + (j % l)], end=' ')
        print()

    print('-' * 6)


def test(n):
    c = 0

    for i in range(n):
        a = 0
        for j in range(n):
            for k in range(n):
                if i < j and j < k:
                    c += 1
                    a += 1
        print(a)

    return c


def decrypt(m):
    ke, y = m
    x = (y * (ke ** 14)) % 29
    return chr(x + ord('a'))


res = "".join(list(map(decrypt, [(3, 15), (19, 14), (6, 15), (1, 24), (22, 13), (4, 7),
                                 (13, 24), (3, 21), (18, 12), (26, 5), (7, 12)])))

print(res)
