// POINT: myHobbies -> array of strings
let myHobbies: string[];
myHobbies = ["Sing", "Dance"];

// POINT: TS does not allow type change
// myHobbies = "B"
// myHobbies = ["H1", "h2", 43];

myHobbies.forEach((hobby) => {
  console.log(hobby.toUpperCase());
  // POINT: TS throws error as hobby is infered as String
  // hobby.map(() => {});
});

// POINT: myMixedHobby: (string | number)[]
let myMixedHobby = ["H1", "H2", 1];

let anyHobby: any[];
anyHobby = ["H1", "h2", 43, { here: "is Object" }];

myMixedHobby.push("Painting");
myMixedHobby[1] = 2;

// POINT: Generics
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
let arrayOfNumber: NumberArray = [10, 12];
let arrayOfObjectName: ObjectWithNameArray = [{ name: "10" }, { name: "213" }];

// POINT: Generics with own type
