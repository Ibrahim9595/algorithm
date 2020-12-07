def count_wins(dice1, dice2):
    assert len(dice1) == 6 and len(dice2) == 6

    dice1_wins = 0
    dice2_wins = 0

    for i in dice1:
        for j in dice2:
            if i > j:
                dice1_wins += 1
            elif j > i:
                dice2_wins += 1
    return (dice1_wins, dice2_wins)


def find_the_best_dice(dices):
    assert all(len(dice) == 6 for dice in dices)

    for i in range(len(dices)):
        f = True
        for j in range(len(dices)):
            if i != j:
                d1, d2 = count_wins(dices[i], dices[j])
                if d1 < d2:
                    f = False
        if f:
            return i
    return -1


def get_best_pairs(dices):
    assert all(len(dice) == 6 for dice in dices)
    result = {}
    for i in range(len(dices)):
        diff = -1
        diff_index = -1
        for j in range(len(dices)):
            if i != j:
                d1, d2 = count_wins(dices[i], dices[j])
                if (d2 - d1) > diff:
                    diff = d2 - d1
                    diff_index = j

        result[i] = diff_index

    return result


def compute_strategy(dices):
    assert all(len(dice) == 6 for dice in dices)

    strategy = dict()
    best_dice = find_the_best_dice(dices)

    if best_dice != -1:
        strategy['choose_first'] = True
        strategy['first_dice'] = best_dice
    else:
        strategy = get_best_pairs(dices)
        strategy['choose_first'] = False

    return strategy


print(compute_strategy([[1, 1, 4, 6, 7, 8], [
      2, 2, 2, 6, 7, 7], [3, 3, 3, 5, 5, 8]]))
