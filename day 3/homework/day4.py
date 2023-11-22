#მომხმარებელს შეეკითხეთ ხელფასი

#თუ 10000ზე მეტია, დაუპრინტეთ, გოა-ში სწავლობდი?

#თუ 1000----10000 -ია , დაუპრინტეთ you mid

#თუ 1000-ზე დაბალია, დაუპრინტეთ, შემოსულიყავი გოაში, მატრიცელო



client_salary=int(input("what  ur salary"))

if client_salary > 10000:
    print("გოა-ში სწავლობდი?")
elif client_salary > 1000  and client_salary < 10000:
    print("you mid")
elif client_salary < 1000:
    print("შემოსულიყავი გოაში, მატრიცელო")