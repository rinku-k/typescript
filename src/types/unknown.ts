let userData: any;
let userInput: unknown;
let userName: string;

// POINT: "unknown" is like "any" -> except it is more restrictive than "any"
userInput = 5;
userInput = "Not sure";

// POINT: IMPORTANT
// 1. "unknown" type can not be assigned to typed var
// 2. "any" type can be assigned to typed var (TS stops type checks for "any" type)
userData = userInput;
// userName = userInput;
if (typeof userInput === "string") {
  userName = userInput;
}
