print("you r welcome!")
insert=input("enter the card type")
if "insert==debit card" and "insert==credit card":
    print("you r currect")
    language=input("enter the language")
    if language=="english" or language=="hindi"or language=="marathi":
        print("press here")
        pin=int(input("enter the four digit pin"))
        if pin==1234:
            print("currect pin")
            account=input("enter the type of a/c")
            if account=="saving" or account=="current":
                print("saving account")
                amount=int(input("enter the amount"))
                total=int(input("enter the amount"))
                if amount>total:
                    print(total-amount)
                    withdraw="cash"
                    if withdraw=="cash":
                        print("please collect your card")
                    else:
                        print("please card not collect")
                else:
                    print("total")  
            else:
                print("current account")
        else:
            print("wrong pin")
    else:
        print("don't press")
else:
    print("you r not currect")
