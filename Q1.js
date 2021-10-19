// If this number is less than 10 then print "number is less than 10". 
// If it is greater than 10 and less than 20 then print "number is less than 20". 
// Else if it is greater than 20 then print "greater than 20".

const a = require("readline-sync");
var num=a.questionInt("enter the number: ")
if(num<10){
  console.log("number is less than 10")
}else if(num>10 && num<20) {
  console.log("number is less than20")
}else{
  console.log("number is greater than 20")
}