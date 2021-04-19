"use strict";
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
function add(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mul(num1, num2) {
    return num1 * num2;
}
function div(num1, num2) {
    return num1 / num2;
}
button === null || button === void 0 ? void 0 : button.addEventListener("click", function (e) {
    console.log(e(+input1.value, +input2.value));
});
