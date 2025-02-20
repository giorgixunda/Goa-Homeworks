# # 1 def simple_multiplication(number) :
#     if number % 2 == 0:
#         return number * 8
#     else:
#         return number * 9
# # 2 def invert(lst):
#     my_arr = []
#     for arr in lst:
#         my_arr.append(arr * -1)
#     return my_arr
# # 3 def fake_bin(x):
#     y = ''
#     for number in x:
#         if int(number) < 5:
#             y += '0'
#         else:
#             y += '1'
#     return y
# # 4 def string_to_array(s):
#     return s.split(" ")
# #5 def rps(p1, p2):
#     if p1 == p2:
#         return "Draw!"
#     elif p1 == "rock" and p2 == "scissors" or p1 == "paper" and p2 == "rock" or p1 == "scissors" and p2 == "paper":
#         return "Player 1 won!"
#     else:
#         return "Player 2 won!"
# #6 def greet(name, owner):
#     if name == owner:
#         return 'Hello boss'
#     else:
#         return 'Hello guest'        
# #7 def monkey_count(n):
#    return [i for i in range(1, n+1)]
# #8 def human_years_cat_years_dog_years(human_years):
#     if human_years == 1:
#         return [1, 15, 15]

#     elif human_years == 2:
#         return [2, 24, 24]

#     else:
#         cat_years = 24 + (human_years - 2) * 4
#         dog_years = 24 + (human_years - 2) * 5
#         return [human_years, cat_years, dog_years]   
# #9 def is_isogram(string):
#     string = string.lower()
#     for letter in string:
#         if string.count(letter) > 1: 
#             return False
#     return True        
# #10 def binary_array_to_number(arr):
#     num = 0
#     for bit in arr:
#         num = num * 2 + bit
#     return num    