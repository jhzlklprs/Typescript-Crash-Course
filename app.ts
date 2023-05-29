const inputNum1 = document.getElementById('input1') as HTMLInputElement;
const inputNum2 = document.getElementById('input2') as HTMLInputElement;
const submitBtn = document.querySelector('button');


function addNumbers(num1 : number, num2 : number) {
    return num1 + num2;
}


submitBtn?.addEventListener('click', () => {
    console.log(`The sum ${addNumbers( +inputNum1.value, +inputNum2.value)}`);
});


