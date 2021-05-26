// POINT: In array we can not restrict size, and can override the type, say "author" can be replaced with 10
// simpleArray: (string|number)[]
let simpleArray = [2, "author"];

simpleArray.push(4);
simpleArray[1] = 10;

// TUPLE: Array must be of 2 element with [number, string] type only
// POINT: Auto-inferrence does not work (it takes it as array)
let roleTuple: [number, string] = [2, "author"];

// POINT: GOOD
// Push is exception and is Allowed in Tuple - Length error is not thrown here
roleTuple.push(4);
roleTuple = [10, "student"];

// POINT: BAD
// roleTuple[1] = 10;
// roleTuple = [10, "student", "admin"];
