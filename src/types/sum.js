var button = document.querySelector("button");
// POINT: '!' -> sure that the element exist
// POINT: 'as HTMLInputElement'  -> Typecasting
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
// POINT: defining type of args
function add(num1, num2) {
    return num1 + num2;
}
// POINT: '+' -> string to number
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
