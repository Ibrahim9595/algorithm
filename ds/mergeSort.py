# O(nlgn) space and time

def _mergeSort(arr, start, end):
    if start >= end:
        return

    mid = (start + end) // 2
    _mergeSort(arr, start, mid)
    _mergeSort(arr, mid + 1, end)
    merge(arr, start, mid, end)


def merge(arr, start, end1, end):
    h = []
    i = start
    j = end1 + 1
    l = end - start + 1

    for _ in range(l):
        if j > end or (i <= end1 and arr[i] < arr[j]):
            h.append(arr[i])
            i += 1
        else:
            h.append(arr[j])
            j += 1

    for k in range(len(h)):
        arr[start + k] = h[k]


def mergeSort(arr):
    return _mergeSort(arr, 0, len(arr) - 1)


# def mergeSort(arr):
#     def merge(start, mid, end):
#         n = (end - start + 1)
#         temp = [0] * n

#         p1 = start
#         p2 = mid + 1

#         for i in range(n):
#             if p2 > end or (p1 <= mid and arr[p1] < arr[p2]):
#                 temp[i] = arr[p1]
#                 p1 += 1
#             else:
#                 temp[i] = arr[p2]
#                 p2 += 1

#         for i in range(start, end + 1):
#             arr[i] = temp[i - start]


#     def divide(start, end):
#         if start >= end:
#             return
#         mid = (start + end) // 2

#         divide(start, mid)
#         divide(mid + 1, end)

#         merge(start, mid, end)

    
#     divide(0, len(arr) - 1)



# while True:
#     arr1 = [randint(-100, 100) for _ in range(10)]
#     arr2 = arr1.copy()

#     arr = arr1.copy()

#     mergeSort(arr1)
#     arr2.sort()

#     if arr1 != arr2:
#         print(arr, arr1, arr2)
#         break

#     print("SUCCESS")
