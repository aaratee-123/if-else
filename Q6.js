// Take two numbers as input from the user. Console the number which is greater.
var a=require("readline-sync")
var num=a.questionInt("enter the number")
var num1=a.questionInt("enter the number")
if (num>num1){
    console.log("num is greater",num)
}else{
    console.log("num1 is greater",num1)
}