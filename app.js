var inputNum1 = document.getElementById('input1');
var inputNum2 = document.getElementById('input2');
var submitBtn = document.querySelector('button');
function addNumbers(num1, num2) {
    return num1 + num2;
}
submitBtn === null || submitBtn === void 0 ? void 0 : submitBtn.addEventListener('click', function () {
    console.log("The sum ".concat(addNumbers(+inputNum1.value, +inputNum2.value)));
});
