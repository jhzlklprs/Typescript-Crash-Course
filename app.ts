//Union Types

type PinoyFreeCoder = number | string;


function addOrCombine(data1:PinoyFreeCoder, data2:PinoyFreeCoder) {
    let result : number | string;
    if (typeof data1 === 'number' && typeof data2 === 'number') {
        result = data1 + data2;
    }else{
        result = data1.toString() + data2.toString();
    }
    return result;
}


const combineNumbers = addOrCombine(3, 4);
console.log(combineNumbers)

const combineString = addOrCombine("Jahzeel ", "Kiel");
console.log(combineString)