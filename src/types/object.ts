// POINT: BAD
// This will assign type to person as object. But the keys properties will not have any types
// const personAsObj: object = {
//   name: "Rinku",
//   experience: 10,
// };

// POINT: GOOD
// Auto infer
// person - object
// name: string, experience: number
const personAutoInfer = {
  name: "Rinku",
  experience: 10,
  hobbies: ["A", "B"],
};

// POINT: NOT REQUIRED
// Auto infer does assigning types, hence manual definition not requirede
// const person: {
//   name: string;
//   hobbies: string[]
// } = {
//   name: "Rinku",
//   experience: 10,
// };

console.log(personAutoInfer.name);

// POINT: This fails as the the TS will not be able to find Type defination of the key
// console.log(person.nickname);

// POINT: Optional Parameters
function printName(obj: { first: string; last?: string }) {
  // POINT: TS will throw error here. Since last is optional param and will not have toLowerCase()
  // const last = obj.last.toLowerCase();

  // Modern JS syntax
  const last = obj.last?.toLowerCase();

  console.log("Name: ", obj.first, last);
}
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// POINT: Object with dynamic value
export const getObjectValue = (
  anyDynamicObj: { [key: string]: object },
  searchable: number | string
): object | null => {
  if (!anyDynamicObj || Object.keys(anyDynamicObj).length === 0) {
    return null;
  }
  return anyDynamicObj[searchable] || null;
};
