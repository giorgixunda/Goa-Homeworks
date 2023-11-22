# def exclamation(word):
#     if word =="spam":
#         print(word + ".")
#     elif word == "maristvis":
#         print(word + "<3")
#     else:
#         print(word + "!")
 
# exclamation("guli")
# exclamation("nikam")
# exclamation("maristvis")


#შექმენით ფუნქცია რომელსაც ექნება ორი პარამეტრი 1) სახელი 2) ასაკი
# ფუნქცია უნდა პრინტავდეს წინადადებას სახელისა და ასაკის გამოყენებით,
# გამოიძახეთ ეს ფუნქცია ოჯახის ყველა წევრისთვის

# def func(name, age):
#     print("hello", name , "i am", age , "years old")

# func("nanuka",44)
# func("mamuka",50)
# func("saba",16)
# func("dato",23)
# func("elene",27)

# def my_sum(x, y): #იქმნება ფუნქცია და გადავეცით მას ორი პარამეტრი
#   return x+y #აბრუნებს გამოთვლილ მნიშნელობას და ინახავს მეხსიერებაში/ / return შესრულებისას ის ასრულებს ფუნქციის სიცოცხლეს

# my_sum =(5,8) #ინახავს მეხსიერებაში
# print(my_sum(5,8))


# def foo(x, y):

#   if x >= y:

#     return x

#   else:

#     return y

# x = foo(4, 7)

# print(x)

# def double(a, b):
#   return [a*2, b*2]

# x = double(6, 9)
# print(x)

# def sum(x): #იქმნება ფუნქცია რომელსაც ენიჭება სახელი sum რომლის პარამეტრია x

#     res = 0 #იქმნება ცვლადი და ენიჭება მას მნიშნელობა 0

#     for i in range(x): #იქმნება ციკლი რომელიც დატრიალდება 4ჯერ 0 - 3მდე

#         res+=i #ყოველ ტრიალზე ამატებს ერთს i(1)

#     return res #ინახავს მეხსიერებაში res და წყვიტავს ერთჯერად ფუნქციად

# print(sum(4)) #პრინტავს 4ს
