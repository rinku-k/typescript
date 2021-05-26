// Specific type

enum Conversion {
  number = "as-number",
  text = "as-text",
}

// POINT: conversion has been assigned values
const join = (
  n1: number | string,
  n2: number | string,
  conversion: Conversion.number | Conversion.text
) => {
  if (conversion === Conversion.number) {
    return +n1 + +n2;
  } else {
    return n1.toString() + n2.toString();
  }
};

// POINT: BAD
// POINT: Conversion.number != "as-number"
// console.log(" Join Number: ", join(10, 1, "as-number"));
// console.log(" Join Number: ", join(10, 1, "any-string"));

// POINT: GOOD
console.log(" Join Number: ", join(10, 1, Conversion.number));
console.log(" Join String as Number: ", join("10", "1", Conversion.number));
console.log(" Join String: ", join("Rinku", "Kumari", Conversion.text));
