const a=require("readline-sync")
var word=a.question("enter the word")
if("ing".includes in word){
    console.log(word+"ly")
}else if ("ing".includes in word && "ly".includes  in word){
    console.log(word,"ok")
}else{
    console.log(word,"not changed")
}