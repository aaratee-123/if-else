const a=require("readline-sync")
var year=a.questionInt("enter the year")
if (year%4==0 && year%100!=0){
    console.log("it is leap year",year)
}else{
    console.log("it is not leap year",year)
}