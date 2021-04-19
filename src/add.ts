const button = document.querySelector("button");
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

function add(num1: number, num2: number) {
    return num1 + num2;
}

function sub(num1: number, num2: number) {
    return num1 - num2;
}

function mul(num1: number, num2: number) {
    return num1 * num2;
}

function div(num1: number, num2: number) {
    return num1 / num2;
}


button?.addEventListener("click",(e: Event) => {
    console.log(e(+input1.value, +input2.value));
});