#Uses python3
import time,random
def majorityElement(arr):
    majority = 0
    found = {}

    for a in arr:
        if a in found.keys():
            found[a] += 1
        else:
            found[a] = 1

    for f in found:
        if found[f] > int(len(arr)/2):
            majority = 1
            break

    print(majority)

def merge(arr1, arr2):
    ret = []
    # global num
    # for i in arr1:
    #     for j in arr2:
    #         if i > j:
    #             num += 1

    while len(arr1) and len(arr2):
        global num
        if arr1[0] <= arr2[0]:  
            ret.append(arr1.pop(0))
        else:
            num += len(arr1)
            ret.append(arr2.pop(0))
    return  ret + arr1 + arr2

def mergeSort(arr):
    if len(arr) == 1:
        return (arr)
    mid = int(len(arr)/2)
    left = mergeSort(arr[:mid])
    right = mergeSort(arr[mid:])
    return merge(left, right)

def quickSort(arr):
    if not len(arr):
        return arr

    pivot  = arr[0]
    
    before = [x for x in arr if x <  pivot]
    pivots = [x for x in arr if x == pivot]
    after  = [x for x in arr if x >  pivot]
    
    return quickSort(before) + pivots + quickSort(after)

def binarySearch(arr, low, high, key):
    mid = low + int( (high - low) / 2)

    if high < mid or low > mid:
        return -1
    
    if key  == arr[mid]:
        return mid
    elif key > arr[mid]:
        return binarySearch(arr, mid+1, high, key)
    elif key < arr[mid]:
        return binarySearch(arr, low, mid-1, key)

#problems of algorithm course week4

#problem1 //call binarySearch(arr, 0, len(arr)-1, key)
#problem2 //call majorityElement(arr)
#problem3 //call quickSort(arr)
#problem4 //num = 0 //call mergeSort(arr) //print(num)

#Taking input
# n = int(input())
# arr = input()
start_time = time.time()
# arr = list(map(int, arr.split()))
# assert(n == len(arr))


#problem5
arr = []
x = input().split()
n = list(map(int, x))
for i in range(n[0]):
    a = input().split()
    t = tuple(map(int, a))
    arr.append(t)

q = input().split()
for i in q:
    num = 0
    for a in arr:
        if int(i) >= a[0] and int(i) <= a[1]:
            num += 1
        else:
            break
   print(num, end=" ")

print("--- %s seconds ---" % (time.time() - start_time))