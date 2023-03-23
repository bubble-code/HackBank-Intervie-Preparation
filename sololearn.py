numbers = ['one', 'two', 'three', 'four']
num_dict = {
    x[0]: x for x in numbers
}
# print(num_dict)  # {'o': 'one', 't': 'three', 'f': 'four'}
# print(num_dict['t'])  # three
# -------------------------------
lst = [1, 2, 3, 4, 5]
index = min(max(False, -3, -4), 2, 3, 4)
# print(max(False, -3, -4))  # False which is the same as 0
# print(lst[index])
# -------------------------------
# print((2//3))
# -------------------------------
a = [1, 2, 0, 3, 4]
for x in range(len(a)):
    if x >= 4:
        print(a[-a[-1]])
