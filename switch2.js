var a=require("readline-sync")
var day=a.questionInt("enter the number")
var meal=a.question("enter the meal")
switch (day){
    case 1:
        console.log("monday");
        switch (meal){
            case "breakfast":
                console.log("pasta");
                break;
            case "lunch":
                console.log("bhindicurry_chapati_dal_chawal");
                break;
            case "dinner":
                console.log("rajama_chawal")
            break;
        }
    break;
    case 2:
        console.log("tuesday");
        switch (meal){
            case "breakfast":
                console.log("maggi");
                break;
            case "lunch":
                console.log("karelacurry_chapati_dal_chawal")
                break;
            case "dinner":
                console.log("alucurry_chapati")
            break;
        }
    break;
    case 3:
        console.log("wednesday");
        switch (meal){
            case "breakfast":
                console.log("poha")
                break;
            case "lunch":
                console.log("panircurry_chapati_dal_chawal")
                break;
            case "dinner":
                console.log("cholecurry_chapati")
            break;
        }
    break;
    case 4:
        console.log("thusday");
        switch (meal){
            case "breakfast":
                console.log("upama")
                break;
            case "lunch":
                console.log("baingancurry_chapati_dal_chawal")
                break;
            case "dinner":
                console.log("allo_banigancurry_chapati")
            break;
        }
    case 5:
        console.log("friday");
        switch (meal){
        case "breakfast":
            console.log("upama")
            break;
        case "lunch":
            console.log("baingancurry_chapati_dal_chawal")
        case "dinner":
            console.log("allo_banigancurry_chapati")
            break;
        break;
    }
    case 6:
        console.log("saturday");
        switch (meal){
        case "breakfast":
            console.log("sprouts")
            break;
        case "lunch":
            console.log("cornflowercurry_chapati_dal_chawal")
            break;
        case "dinner":
            console.log("dalcurry_chapati")
        break;
    }
    case 7:
        console.log("sunday");
        switch (meal){
        case "breakfast":
            console.log("idali")
            break;
        case "lunch":
            console.log("beanscurry_chapati_dal_chawal")
            break;
        case "dinner":
            console.log("sayabeencurry_chapati")
        break;
    }
    
}