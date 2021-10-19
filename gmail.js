var a=require("readline-sync");
visit="accounts.google.com";
console.log(visit);
console.log("Click on Create account.")
var name=a.question("enter the first name")
var last_name=a.question("enter the last name")
user_name=a.question("enter the user name");
if (user_name==name+"@gmail.com" || user_name==last_name+"@gmail.com"){
    console.log("currect user name",user_name)
    var ch=a.question("enter the alphabat")
    if (ch>="a"||ch<="z"||ch>"A" || ch<"Z"){
        var num=a.questionInt("enter the number")
        if (num>=0 ||num<=9){
            var sp=a.question("enter the special character")
            if (sp =="@"||sp=="$"||sp=="#"||sp=="&"||sp=="*"){
                password=(ch+sp+num)
                console.log("it is password")
                if (pass.length==8){
                    console.log(password,"currect")
                    console.log("click on 'Next'")
                    var mobile=a.questionInt("enter mobile number")
                    if(mobile.length==10){
                        console.log("it is mobile number"+mobile)
                        var enter=a.questionInt("enter 6 digit varification code receive on mobile")
                        if (enter.length==6){
                            console.log("varification code currect")
                            var DOB=a.question("enter the date of birth")
                            if (DOB>="01/01/2005"){
                                console.log("date of birth is:",DOB)
                                choose=a.question("choose gender")
                                if (choose=="M"||choose=="F"){
                                    console.log("currect procced Next Page")
                                    click=a.question("enter the botton I Agree!")
                                    if (click=="I Agree!"){
                                    console.log("Congratulations! your account has been created.")
                                    }else{
                                        console.log("your have already login with this username try again")
                                    }
                                }else{
                                    console.log("incurrect")
                                }
                            }else{
                                console.log("invalid date of birth")
                            }
                        }else{
                            console.log("invalid varification code")
                        }
                    }else{
                        console.log("incurrect mobile number",mobile)
                    }
                }else{
                    console.log(password+ "Incurrect")
                }
            }else{
                console.log("it is not a password")

            }
        }else{
            pass
        }
    }else{
        pass
    }
}else{
    console.log("incurrect username",user_name)
}
                                                                                                           