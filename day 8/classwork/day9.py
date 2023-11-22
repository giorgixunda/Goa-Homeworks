my_str = "nika keshelava is the CEO of GOA"
#1
if " " in my_str:
    print(my_str.replace(" ", ""))

#2
new_str =""
for char in my_str:
    if char !=" ":
        new_str += char
print(new_str)