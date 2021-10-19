// 18. Write a python program to input marks of five subjects Physics, Chemistry, Biology, Mathematics and
// Computer. Calculate percentage and grade according to following:
// Percentage >= 90% : Grade A Percentage >= 80% : Grade B Percentage >= 70% : Grade CPercentage >= 60% : Grade D
// Percentage >= 40% : Grade EPercentage < 40% : Grade F
const a=require("readline-sync")
var percentage=a.questionInt("enter the marks")
if (percentage>=90){
    console.log("grade A")
}else if(percentage>=80){
    console.log("grade B")
}else if(percentage>=70){
    console.log("grade C")
}else if(percentage>=60){
    console.log("grade D")
}else if (percentage>=40){
    console.log("grade E")
}else{
    console.log("grade F")
}