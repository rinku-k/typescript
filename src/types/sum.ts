const button = document.querySelector("button");
// POINT: '!' -> sure that the element exist
// POINT: 'as HTMLInputElement'  -> Typecasting
const input1 = document.getElementById("num1")! as HTMLInputElement;
const input2 = document.getElementById("num2")! as HTMLInputElement;

// POINT: defining type of args
function add(num1: number, num2: number) {
  return num1 + num2;
}

// POINT: '+' -> string to number
button.addEventListener("click", function () {
  console.log(add(+input1.value, +input2.value));
});
