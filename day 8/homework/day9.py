# შექმენით ფუნქცია რომელსაც გადაეცემა 3 პარამეტრი(სამკუთხედის გვერდები) 
# და დაპრინტავს "ასეთი სამკუთხედი იარსებებს", 
# ან დაპრინტავს "ასეთი სამკუთხედი ვერ იარსებებს" )

def samkutxedis_gverdebi(A, B, C):
    if A+B > C:         #10 #5 #9
        print("ასეთი სამკუთხედი იარსებებს")
    else:
        print("ასეთი სამკუთხედი ვერ იარსებებს")

side_1 = float(input("enter side one: "))
side_2 = float(input("enter side two: "))
side_3 = float(input("enter side three: "))
samkutxedis_gverdebi(side_1, side_2, side_3)

# შექმენით ფუნქცია რომელსაც გადაეცემა სამი სახელი (სამი პარამეტრი) და დაპრინტავს ამ სახელებისგან სიას ( join ან split) გაიხსენეთ

name = " name2 ".join(["name1", "name3",])
print(name)

name = "name1 name2 name3"
x = name.split(" ")
print(x)


#meore nairad
def split_string(names_string):
  names = names_string.split()
  print(names)
names = "dato nene megi"
split_string(names)