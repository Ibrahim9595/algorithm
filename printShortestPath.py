
# def getNightNextMoves(location, path, n):
#     i, j = location
#     MOVES = [
#         ((-2, -1), 'UL'),
#         ((-2, 1), 'UR'),
#         ((0, 2), 'R'),
#         ((2, 1), 'LR'),
#         ((2, -1), 'LL'),
#         ((0, -2), 'L'),
#     ]

#     def validMovePredicate(move):
#         location, _ = move
#         i, j = location
#         return i >= 0 and i < n and j >= 0 and j < n

#     newMoves = list(map(lambda move: ((i + move[0][0], j + move[0][1]),
#                                       path + [move[1]]), MOVES))

#     return list(filter(validMovePredicate, newMoves))


# def getBestMove(i_end, j_end, moves):
#     dist = 10000
#     bestMove = None
#     for move in moves:
#         (i, j), _ = move
#         newDist = abs(i - i_end) + abs(j - j_end)

#         if newDist < dist:
#             bestMove = move
#             dist = newDist

#     return bestMove


# def sortPath(path):
#     MAP = {
#         "UL": 0,
#         "UR": 1,
#         "R": 2,
#         "LR": 3,
#         "LL": 4,
#         "L": 5
#     }

#     return sorted(path, key=lambda d: MAP[d])

# def printShortestPath(n, i_start, j_start, i_end, j_end):
#     location = (i_start, j_start)
#     path = []
#     visited = {}
#     while not(location[0] == i_end and location[1] == j_end):
#         location, path = getBestMove(
#             i_end, j_end, getNightNextMoves(location, path, n))

#         if location in visited:
#             print("Impossible")
#             return

#         visited[location] = True

#     print(len(path))
#     print(" ".join(sortPath(path)))


def printShortestPath(n, i_start, j_start, i_end, j_end):
    # Print the distance along with the sequence of moves.
    end = (i_end, j_end)
    vset = set()
    vset.add((i_start, j_start))
    stack = [(i_start, j_start, '')]
    count = 0
    steps = [('UL', -2, -1), ('UR', -2, 1), ('R', 0, 2),
             ('LR', 2, 1), ('LL', 2, -1), ('L', 0, -2)]
    while stack:
        count += 1
        N = len(stack)
        while N > 0:
            N -= 1
            i, j, path = stack.pop(0)
            for direction, stepx, stepy in steps:
                x = i+stepx
                y = j+stepy
                if (x, y) == end:
                    print(count)
                    path += ' '+direction
                    print(path[1:])
                    return
                if 0 <= x < n and 0 <= y < n and (x, y) not in vset:
                    vset.add((x, y))
                    stack.append((x, y, path+' '+direction))
    print('Impossible')


printShortestPath(70, 7, 15, 67, 3)
