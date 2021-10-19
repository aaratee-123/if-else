console.log("**WELCOME IN SBI ATM**");
console.log("Insert the Atm Card");
const a=require("readline-sync");
var Language=a.question("enter the language");
if (Language=="english"){
        console.log("Continue the process");
        var pin=a.questionInt("enter the pin");
        if (pin==9999){
            console.log("your pin is currect");
            var Ac=a.question("enter the type of A/C");
            if (Ac=="saving" || Ac=="current"){
                console.log(Ac+"Account")
                var type=a.question("enter the type of transaction");
                var total=a.questionInt("enter the total amount");
                if(type=="withdraw" || type=="balance enquiry"){
                    var num=a.questionInt("enter the number for type");
                    if (num==1){
                        console.log("continue withdraw")
                        var amount=a.questioInt("enter the amount");
                        if (amount-total){
                            console.log("balance=",total-amount)
                            ans=a.question("enter your suggestion yes or no(y/n)");
                            if (ans=="y"){
                                console.log("take a printed receipt");
                                console.log("**THANK YOU USING SBI ATM**");
                            }else{
                                console.log("no")
                                console.log("**THANK YOU USING SBI ATM**");
                                }
                        }else{
                            console.log("balance=",total);
                        }
                    }else{
                        console.log("continue balance enquiry");
                    }
                }else{
                    console.log("you select balance enquiry");
                }
            }else{
                console.log(Ac,"account");
            }
        }else{
            console.log("enter currect pin");
        }
    }else{
        console.log("you select language Hindi"); 
    }        
        
    
            
                                

























