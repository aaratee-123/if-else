// people 5 years and above in age can go to school.People 18 years and above in age can vote in elections.
// People 21 years and above in age can drive a car.People 24 years and above in age can marry.
// People 25 years and above in age can legally drink.
const a=require("readline-sync")
var age=a.questionInt("enter the number")
if(age>=25){
    console.log("legally drink.")
}else if(age>=24){
    console.log("marry.")
}else if(age>=21){
    console.log("drive a car")
}else if(age>=18){
    console.log("vote in elections.")
}else if (age>=5){
    console.log("go to school")
}else{
    console.log("nothing")
}