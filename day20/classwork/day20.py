# def paperwork(n, m):
#     if m < 0 or n < 0:
#         return 0
#     else:
#         return n * m
name = "name lastname"
print(name.split())
def abbrev_name(name):
    words = name.split()
    first_letter = words[0][0]
    return first_letter
print(abbrev_name("FirstName LastName"[0]))


#1
# def abbrev_name(name):
#     words = name.split()
#     new_letter = ""
#     first_letter = words[0][0].capitalize()
#     second_letter = words[1][0].capitalize()
#     new_letter += first_letter + "." + second_letter
#     return new_letter

#2
# def abbrev_name(name):
#     words = name.split()
#     first_letter = words[0][0]
#     first_letter.upper()
#     second_letter= words[1][0]
#     second_letter.upper()
#     return "{}.{}".format(first_letter, second_letter)