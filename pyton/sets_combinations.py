from itertools import combinations_with_replacement

salads = []
for salad in combinations_with_replacement('TPL', r=4):
    salads.append("".join(salad))

print(len(salads))

for s in salads:
    print(s)

