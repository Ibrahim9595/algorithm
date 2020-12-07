#Uses python3
import time

#problem2
def knapSack(wights, W):
    n = len(wights)
    values = [[0] * (W+1)] * (n+1)
    for i in range(1, n+1):
        for w in range(1, W+1):
            values[i][w] = 1
            print(values)
    print(values)

#problem1
def maxOperation(n):
    values = [0] * (n+1)
    throug = [[]]*(n+1)
    throug[1] = ['1']
    for i in range(2,n+1):
        a = values[i-1] + 1
        b = values[i // 2] + 1 if i % 2 == 0 else n
        c = values[i // 3] + 1 if i % 3 == 0 else n
        if a <= b and a <= c:
            values[i] = a
            throug[i] = throug[i - 1] + [str(i)]
        elif b <= a and b <= c:
            values[i] = b
            throug[i] = throug[i // 2] + [str(i)]
        elif c <= a and c <= b:
            values[i] = c
            throug[i] = throug[i // 3] + [str(i)]

    return(values[n], throug[n])


#taking inputs

print(knapSack([1,8,3],10))
# print("time:  "+ str(time.time()-start))