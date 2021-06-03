// POINT: NOT REQUIRED (TS auto infer return type of function)
const sumArrow = (n1: number, n2: number): number => {
  return n1 + n2;
};

function sumFn(n1: number, n2: number): number {
  return n1 + n2;
}

// POINT: GOOD
function sum(n1: number, n2: number) {
  return n1 + n2;
}

function handleSum(n1: number, n2: number, cb: (n: number) => void) {
  const result = n1 + n2;
  cb(result);
}

function sumOfThree(n1: number, n2: number, n3: number) {
  return n1 + n2 + n3;
}

// Void return Type - if no return mentioned
const printResult = (text: number) => {
  console.log("Result : ", text);
};

// undefined Type - if return undefined then fn type is undefined
let aCar: undefined;
const printResultUndef = (text: number): undefined => {
  console.log("Result : ", text);
  return;
};

printResult(sum(1, 2));

let aFunction;

// POINT: Pointer
aFunction = sum;

// POINT: NOTE Where TS does not work
aFunction = 5;
console.log(aFunction(10, 1));

// POINT: type Function - takes only function
let bFunc: Function;
bFunc = sum;
// bFunc = 5; // Can not be added to type Function

// POINT: No arg restriction, TS allows any func
bFunc = printResult;
console.log(bFunc(10, 1)); // > undefined

// POINT: arg & return type -> restricting to a format of function/s
let cFunc: (a: number, b: number) => number;
cFunc = sum;
// cFunc = printResult;

let dFunc: (a: number, b: number, cb: (n: number) => void) => void;
dFunc = handleSum;
dFunc = sum;
dFunc = printResult;
// dFunc = sumOfThree;
handleSum(10, 20, (result) => {
  console.log(result);
  // POINT: cb: (n: number) => void means that returned value is may not used in dFunc even though it is returned from cb function
  // TS does not care about the return type of Callback functions
  return result;
});
