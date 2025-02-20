# #1 def multiply(a, b):
#     return a * b
# #2 def get_count(sentence):
#     vowels = "aeiou"
#     return sum(1 for chr in sentence if chr in vowels)    
# #3 def solution(string):
#     return string[::-1]
# #4 def likes(names):
#     if not names:
#         return "no one likes this"
#     elif len(names) == 1:
#         return f"{names[0]} likes this"
#     elif len(names) == 2:
#         return f"{names[0]} and {names[1]} like this"
#     elif len(names) == 3:
#         return f"{names[0]}, {names[1]} and {names[2]} like this"
#     return f"{names[0]}, {names[1]} and {len(names) - 2} others like this"
# #5 def solution(number):
#     if number < 0:
#         return 0
    
#     sum = 0
#     for i in range(number):
#         if i % 3 == 0 or i % 5 == 0:
#             sum += i
#     return sum 
# #6 def create_phone_number(numbers):
#     return "({}{}{}) {}{}{}-{}{}{}{}".format(*numbers)
# #7 def high_and_low(numbers):
#     nums = [int(x) for x in numbers.split()]
#     return f"{max(nums)} {min(nums)}"
# #8 def find_it(seq):
#     result = 0
#     for num in seq:
#         result ^= num
#     return result        