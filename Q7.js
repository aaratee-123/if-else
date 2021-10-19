// Takes a number as user input. Check if this number is divisible by 5 and 15 both
// If it is divisibe by both prints "Divisible by both".else prints "Not divisible by both"
const a=require("readline-sync")
var num=a.questionInt("enter the number")
if(num%5==0 && num%15==0){
    console.log("Divisible by both")
}else{
    console.log("not divisible by both")
}
