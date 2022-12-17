# def maximumPerimeterTriangle(sticks):
#     sticks.sort()
#     for i in range(len(sticks)-3, -1, -1):
#         if sticks[i] + sticks[i+1] > sticks[i+2]:
#             return [sticks[i], sticks[i+1], sticks[i+2]]
#     return [-1]
# # ===============================


# def findZigZagSequence(a, n):
#     a.sort()
#     mid = int(n / 2)
#     a[mid], a[n-1] = a[n-1], a[mid]

#     st = mid + 1
#     ed = n - 2
#     while (st <= ed):
#         a[st], a[ed] = a[ed], a[st]
#         st = st + 1
#         ed = ed - 1

#     for i in range(n):
#         if i == n-1:
#             print(a[i])
#         else:
#             print(a[i], end=' ')
#     return


# test_cases = int(input())
# for cs in range(test_cases):
#     n = int(input())
#     a = list(map(int, input().split()))
#     findZigZagSequence(a, n)

# findZigZagSequence(list([1, 2, 3, 4, 5, 6, 7]), 7)

# import time


# def progress_bar(step:int, total:int, len:int)->str:
#     frac = step/total
#     completed = int(frac*len)
#     rest = len - completed
#     return f"[{'#'*completed}{'-'*rest}]{frac:.0%}"


# n = 30
# l = 10

# for i in range(n+1):
#     time.sleep(0.1)
#     print(progress_bar(i, 30, l), end='\r')

def maxMin(k, arr):
    # Sort the array in ascending order
    arr.sort()
    n = len(arr)
    xmin = arr[-1]        # Initialise with the maximum value in the array
    for i in range(n-k+1):
        # If the difference between elements with distance 'k' is less than minimum, update the minimum
        if arr[i+k-1]-arr[i] < xmin:
            xmin = arr[i+k-1]-arr[i]
    return xmin


maxMin(4, [2, 8, 2, 4, 4, 1])
