a=int(input("enter the number"))
b=int(input("enter the number"))
op=input("enter the oparator")
add=(a,b)
sub=(a,b)
mul=(a,b)
div=(a,b)
mod=(a,b)
if(op=="+"):
    print(a+b)
elif(op=="-"):
    print(a-b)
elif(op=="*"):
    print(a*b)
elif(op=="/"):
    print(a/b)
elif(op=="%"):
    print(a%b)
else:
    print("no oparator")

