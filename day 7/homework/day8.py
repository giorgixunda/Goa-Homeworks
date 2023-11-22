x = [2, 4, 6, 2, 4, 7, 2, 9]
for i in range(2):
    x.remove(4)
print(x)


#დაემატოს ასაკები და დაიპრინტოს თითოეული რამდენი წლის არის ერთ გრძელ წინადადებად 
# ხოლო მეორე დაპრინტვაზე დაიპრინტოს რამდენი წლის გახდნენ 10 წელში
family = ["nanuka", "saba", "gio"]
full_sentence = "My moms name is: {}, My brothers name is: {}, My name is: {}".format(family[0],family[1],family[2])
print(full_sentence)

family_age = [44, 16, 15]
full_sentence = "My moms age is: {}, My brothers age is: {}, My age is: {}".format(family_age[0],family_age[1],family_age[2])
print(full_sentence)

family_age = [44 + 10, 16 + 10, 15 + 10]
full_sentence = "My moms after 10 years age is: {}, My brothers after 10 years age is: {}, My age  after 10 years is: {}".format(family_age[0],family_age[1],family_age[2])
print(full_sentence)