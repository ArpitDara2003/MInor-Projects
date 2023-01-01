a = float(input("Enter the first number:"))
op = input("enter the oprator:" )
b = float(input("Enter the second number:"))

if op == "+":
    print(a+b)
elif op =="-":
    print(a-b)
elif op == "*":
    print(a*b)
elif op == "/":
    print(a/b)
elif op == "^":
    print(pow(a,b))
elif op == "%":
    print((a/b)*100)
else:
    print("Error")
    
    
