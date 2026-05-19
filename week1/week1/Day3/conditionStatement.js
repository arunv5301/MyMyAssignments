let isPrime=false; // real user is non subscriber

// rule 1 : for existing subscriber the movie will starts to play in player --> true
// rule 2 : for non subscriber, it should be redirected to subscription page --> false

if (isPrime==true) { // rule 1
    console.log("the movie will starts to play in player")
}else{ // rule 2
    console.log("it should redirect the user to the subscription page")
}
// income tax 
// rule 1 : if any person annual income is less than 8 LPA --> NO TAX IS DEDUCTED
// rule 2 : if any person annual income is between 8LPA TO 15 LPA --> 10% TAX IS DEDUCTED
// rule 3 : if any person annual income is more than 15 LPA  --> 30% TAX IS DEDUCTED

let annualIncome= 31;
if(annualIncome<8){
    console.log("NO TAX IS DEDUCTED")
}else if(annualIncome>8 && annualIncome<15){
    console.log("10% TAX IS DEDUCTED")
}else{
    console.log("30% TAX IS DEDUCTED")
}

// switch case --> for the known data validation
// Req : if type the browser name it should fetch the latest avaialble version
let browserName="chrome"

//[switch] key != [case] value 
switch (browserName) {
    case "chrome":
        console.log("148.0.7778.97")
        break;
    case "firefox":
        console.log("150.0.3")
         break;
    default:
        console.log("browser not supported, please enter the valid browser for windows environment")
        break;
}