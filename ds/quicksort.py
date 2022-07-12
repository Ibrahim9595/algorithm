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

def _quicksort(arr, start, end):
    if start >= end:
        return
    piviotIdx = partition(arr, start, end)
    _quicksort(arr, start, piviotIdx - 1)
    _quicksort(arr, piviotIdx + 1, end)

def quicksort(arr):
    return _quicksort(arr, 0, len(arr) - 1)
