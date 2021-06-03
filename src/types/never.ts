// POINT: arrow function return type is "never" as the function throws err & JS crashes
const generateError = (message: string, errorCode: number) => {
  throw { message, errorCode };
  // POINT: Same for this as JS will never return
  // while(true) {}
};

// Fn return "void" by default
function generateErrorFn(message: string, errorCode: number): never {
  throw { message, errorCode };
}

generateError("This is sample", 500);
