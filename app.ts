//Functions

function sum(num1 : number, num2 : number){
    return num1 + num2;
}

function getResult(num : number) : string{
    let resultString = `Result : ${num}`;
    return resultString;
}



let AddOrGetResult : (num1 : number, num2 : number) => number;
let getResultFunction : (num : number) => string;


AddOrGetResult = sum;
getResultFunction = getResult;