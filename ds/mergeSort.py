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
