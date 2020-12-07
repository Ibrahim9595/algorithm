#Uses python3
# n = input().split()
# print( (int(n[0]) * int(n[1])) // gcd(int(n[0]), int(n[1])))
import math, random

def fibLastDigitSum(x):
    arr = [0, 1, 1, 2, 3, 5, 8, 3, 1, 4,
       5, 9, 4, 3, 7, 0, 7, 7, 4, 1, 
       5, 6, 1, 7, 8, 5, 3, 8, 1, 9, 
       0, 9, 9, 8, 7, 5, 2, 7, 9, 6, 
       5, 1, 6, 7, 3, 0, 3, 3, 6, 9, 
       5, 4, 9, 3, 2, 5, 7, 2, 9, 1]
    s = 280
    if(x % len(arr) == 0):
        return((int(x/len(arr))*s))
    else:
        mod = x % len(arr)
        sum = 0
        for i in range(mod+1):
            sum += arr[i]
        return((int((x-mod)/len(arr))*s+sum))

def fib(n, mod):
    arr = [0, 1]
    for i in range(2, n+1):
        arr.append((arr[i-1] + arr[i-2]))
    s = 0
    for i in range(mod, n+1):
        s += arr[i]
    return(s%10)

def fibMod(mod, flag):
    if mod <= 100:
        x = 10000
    else:
        if(flag):
            return fib(mod + 1, mod)
        elif(mod % 10 == 0):
            return fib(mod, mod)
        x = int(mod * 10)

    arr = fib(x, mod) 
    arr1 = []
    find = 1
    for i in arr:
        arr1.append(i)
        if arr[0:find] == arr[find:2*find]:
            break
        else:
            find += 1
    if arr1[0] == arr1[len(arr1) - 1]:
            arr1.pop()

    return arr1

def gcd(a, b):
    if(a % b == 0):
        return b
    else:
        return gcd(b, a % b)

#Taking Inputs:

# while True:
#     x = random.randint(1, 10000)
#     y = random.randint(x, 10000)
#     print(str(x)+"  "+str(y))
#     a = fib(y, x)
#     b = (fibLastDigitSum(y) - fibLastDigitSum(x-1))%10
#     if a == b:
#         print("OK")
#     else:
#         print("WRONG")
#         print("Correct => "+str(a))
#         print("Wrong => "+str(b))
#         break

x = input().split()
x = list(map(int,x))
# print(fib(x[1],x[0]))
print((fibLastDigitSum(x[1]) - fibLastDigitSum(x[0]-1))%10)