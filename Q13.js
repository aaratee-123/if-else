const a=require("readline-sync")
var actual_price=a.questionInt("enter the number")
var selling_price=a.questionInt("enter the number")
if (actual_price>selling_price){
    loss=actual_price-selling_price
    console.log("total loss",loss)
}else if(selling_price>actual_price){
    profit=selling_price-actual_price
    console.log("total loss",profit)
}else{
    console.log("no profit no loss")
}
