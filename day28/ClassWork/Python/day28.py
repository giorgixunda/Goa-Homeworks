import Math
def mathcalc():
    feature = input("Enter The Math Operator +, -, *, /:")
    num = int(input("Enter Number:"))
    num0 = int(input("Enter The Second Number:"))
    math_num = 0
    if feature == "+":
        math_num = num + num0
    elif feature == "-":
        math_num = num - num0
    elif feature == "+":
        math_num = num * num0
    elif feature == "/":
        if num0 != 0:
            math_num = num / num0
mathcalc()
