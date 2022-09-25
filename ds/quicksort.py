from random import randint

def partition(arr, start, end):
    pivotIdx = randint(start, end)
    piviot = arr[pivotIdx]

    arr[pivotIdx], arr[end] = arr[end], arr[pivotIdx]

    left = start

    for i in range(start, end):
        if arr[i] < piviot:
            arr[left], arr[i] = arr[i], arr[left]
            left += 1

    arr[end], arr[left] = arr[left], arr[end]
    return left
# O(nlgn) space and time worst case O(N**2) time (not stable)

def _quicksort(arr, start, end):
    if start >= end:
        return
    piviotIdx = partition(arr, start, end)
    _quicksort(arr, start, piviotIdx - 1)
    _quicksort(arr, piviotIdx + 1, end)

def quicksort(arr):
    return _quicksort(arr, 0, len(arr) - 1)


# def quicksort(arr: List[int]):
#     def partition(start: int, end: int) -> int:
#         piviotIdx = randint(start, end)
#         pivot = arr[piviotIdx]
#         arr[piviotIdx], arr[end] = arr[end], arr[piviotIdx]

#         left = start

#         for right in range(start, end):
#             if arr[right] < pivot:
#                 arr[right], arr[left] = arr[left], arr[right]
#                 left += 1

#         arr[left], arr[end] = arr[end], arr[left]

#         return left

#     def quicksort(start: int, end: int):
#         if start >= end:
#             return
        
#         pivot = partition(start, end)

#         quicksort(start, pivot - 1)
#         quicksort(pivot + 1, end)

#     quicksort(0, len(arr) - 1)



# while True:
#     arr1 = [randint(-100, 100) for _ in range(100)]
#     arr2 = arr1.copy()

#     quicksort(arr1)
#     arr2.sort()

#     if arr1 != arr2:
#         print(arr1, arr2)
#         break

#     print("SUCCESS")