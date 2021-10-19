// Take user input in a variable named varx.Check if this number is divisible by 2.
// Console that number is divisible by 2 or notIf number is divisible by 2 console 2 se 
// “divisible hai” else “not divisible”
const a=require("readline-sync")
var varx=a.questionInt("enter the number")
if(varx%2==0){
    console.log("divisible hai")
}else{
    console.log("not divisible")
}