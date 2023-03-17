from functools import reduce
import numpy as np


def misereNim(s):
    if (max(s) == 1):
        return 'First' if len(s) % 2 == 0 else 'Second'

    xor = reduce((lambda x, y: x ^ y), s)
    return 'Second' if xor == 0 else 'First'

    # xor = reduce((lambda x,y:x ^ y), s)
    # return "Second" if xor == 0 else "First"


# print(misereNim([1, 2, 2]))


def gamingArray(arr):
    next_player = 1
    max_element = max(arr)
    i = 1
    while i < len(arr):
        if arr[i] == max_element:
            arr = arr[:i]
            max_element = max(arr)
            next_player = 2 if next_player == 1 else 1
            i = 1
        else:
            i += 1
    return 'BOB' if next_player == 1 else 'ANDY'


# print(gamingArray([5, 2, 6, 3, 4]))
