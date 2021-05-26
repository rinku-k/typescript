const add = (n1: number, n2: number) => {
  const sum = n1 + n2;
  return sum;
};

// POINT: number | string | boolean -> Union type
// const nonWorkingUnion = (n1: number | string, n2: number | string) => {
//   // POINT: TS just see its union and does not check types & throw error
//   const sum = n1 + n2;
//   return sum;
// };

// POINT: GOOD
// For some cases union type may require runtime checks
const combine = (n1: number | string, n2: number | string) => {
  let sum;
  if (typeof n1 === "number" && typeof n2 === "number") {
    sum = n1 + n2;
  } else {
    sum = n1.toString() + n2.toString();
  }
  return sum;
};

console.log(" Add Number : ", add(1, 3));

console.log(" Combine Number: ", combine(1, 3));
console.log(" Combine String: ", combine("Rinku", "Kumari"));
