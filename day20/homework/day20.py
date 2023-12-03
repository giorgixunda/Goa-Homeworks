#1 Codewars Homework
def find_needle(haystack):
    index = haystack.index("needle")
    if "needle" in haystack:
        return f"found the needle at position {index}"
#2 Codewars Homework
def make_upper_case(s):
    return s.upper()


#3 Codewars Homework
def sum_array(a):
    if not a:
        return 0
    else:
        arr = sum(a)
    return arr


#4 Codewars Homework
def are_you_playing_banjo(name):
    if name.lower()[0] == 'r':
        return name + ' plays banjo'
    return name + ' does not play banjo'


#5 Codewars Homework
def invert(lst):
    my_arr = []
    for arr in lst:
        my_arr.append(arr * -1)
    return my_arrv

#6 Codewars Homework
def find_average(numbers):
    if not numbers:
        return 0
    else:
        return sum(numbers) / len(numbers)