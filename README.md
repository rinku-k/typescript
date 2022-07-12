# typescript

Quick points on how to use typescript

# Feature

![](images/01_ts_features.png)
![](images/02_index.png)

# Setup

1. Install TS Compiler `npm install -g typescript'
2. Initialise the project `tsc --init`
3. You can run `tsc <file/path>`

# Basics

TS helps to catch errors before runtime unlike JS by doing type checks while coding.

## Static type-checking

```js
const message = "hello!";

message();
// Error: This expression is not callable. Type 'String' has no call signatures
```

## Non-exception Failures

1. Accessing non existing properties

```js
const user = {
  name: "Daniel",
  age: 26,
};
user.location; // JS returns undefined
// Error: Property 'location' does not exist on type '{ name: string; age: number; }'
```

2. Handling typos

```js
const announcement = "Hello World!";

// How quickly can you spot the typos?
announcement.toLocaleLowercase();
announcement.toLocalLowerCase();

// We probably meant to write this...
announcement.toLocaleLowerCase();
```

3. Uncalled functions

```js
function flipCoin() {
  // Meant to be Math.random()
  return Math.random < 0.5;
  // ERROR: Operator '<' cannot be applied to types '() => number' and 'number'.2365
}
```

4. Logic Errors

```js
const value = Math.random() < 0.5 ? "a" : "b";
if (value !== "a") {
  // ...
} else if (value === "b") {
  // Error: This condition will always return 'false' since the types '"a"' and '"b"' have no overlap.2367
}
```

# Working with Types (Syntax & key points)

| Types       | Values                   | About                                                                                                       |
| ----------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `number`    | 1, 1.5, -10              | int, float, double                                                                                          |
| `string`    | 'Hi', "Hello", \`Howdy\` | All text                                                                                                    |
| `boolean`   | true \| false            | no thruthy / falsy values like 0, '', null etc - since this is decided in JS runtime                        |
| `object`    | { name: 'James' }        | All JS object (auto infer) ![](images/02z_01_object.png)                                                    |
| `array`     | []                       | Types can be flexible (type: any) or strict (number \| string)                                              |
| `tuple`     | []                       | Fixed length & type Array [number, string], No Auto inffer, Can be used as global constant with restriction |
| `enum`      | enum {K1, K2}            | Enumerated List starting with 0 or any number that is assiged                                               |
| `any`       | -                        | Any type, no specific type assignment - same as vanilla JS                                                  |
|             |                          |                                                                                                             |
| `union`     | string \| number \|      | run time checks should be included when using type specific function (ex. toUpperCase())                    |
| `literal`   | "direct-value"           | Having known extact value stored and not just type                                                          |
| `alias`     | any type combination     | Avoid duplicate type combination by creating Alias for same                                                 |
|             |                          |                                                                                                             |
| `undefined` | return;                  | if function returns undefined                                                                               |
| `void`      | no return                | if function with no return                                                                                  |
|             |                          |                                                                                                             |
| `unknown`   | Like "any"               | More restrictive type checking than "any"                                                                   |
| `never`     |                          | If JS execution is stopped (error thrown, infinite loop)                                                    |
|             |                          |                                                                                                             |

## Type Inference

Type inference -> identifying the type of variable
TS by default detects the type hence it is not good practice define the type of variable (at declaration) unless the variable is not assigned with values.
Ex.
-- `const num = 5;` --> Define type `number:5`
-- `let num = 5;` --> Define type `number`
-- `let num;` --> Define type as `any` --> Instead do `let num:number`

## Interface

An interface declaration is another way to name an object type:

```js
interface User {
  name: string;
  id: number;
}

const user: User = {
  name: "Rinku",
  id: 131,
};

function getAdminUser(): User {...}

function deleteUser(user: User) {...}
```

### Differences Between Type Aliases and Interfaces

Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Alias `type` cannot be re-opened to add new properties vs an `interface` which is always extendable. [Read More](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces)

## Composing Types

### Union

```js
type LockStates = "locked" | "unlocked";
```

### Generics

Generics provide variables to types. An array without generics could contain anything. An array with generics can describe the values that the array contains.

```js
type NumberArray = Array<number>;
type ObjectWithNameArray = Array<{ name: string }>;
```

Declaring own type

```js
interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}

declare const backpack: Backpack<string>;

const object = backpack.get(); // --> string
```

Generic function, Multiple infer & Contraints - [function types](src/types/function.ts)

## Structural Typing / Duck typing

In TS, Type checking focuses on the shape that values have. Say, if two objects have the same shape, they are considered to be of the same type.

```js
interface Point {
  x: number;
  y: number;
}

function logPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}

// logs "12, 26"
const point = { x: 12, y: 26 };
logPoint(point);
```

The `point` variable is never declared to be a `Point` type. However, TypeScript compares the shape of `point` to the shape of `Point` in the type-check. They have the same shape, so the code passes.

# Optional Properties

Here `obj: { first: string; last?: string }` `last` is optional properties. Which means it can optionally be part of object while passing in params and TS will not throw error.

```js
function printName(obj: { first: string, last?: string }) {
  // ...
}
// Both OK
printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });
```

# Non-null Assertion Operator

TypeScript also has a special syntax for removing null and undefined from a type without doing any explicit checking. Writing ! after any expression is effectively a type assertion that the value isn’t null or undefined

```js
function liveDangerously(x?: number | null) {
  // No error
  console.log(x!.toFixed());
}
```

it’s important to only use ! when you know that the value can’t be null or undefined.

# Less Common Primitives

### bigInt

used for very large integers

```js
const oneHundred: bigint = BigInt(100);
const anotherHundred: bigint = 100n;
```

### symbol

There is a primitive in JavaScript used to create a globally unique reference via the function Symbol():

```js
const firstName = Symbol("name");
const secondName = Symbol("name");

if (firstName === secondName) {
  // ERROR: This condition will always return 'false' since the types 'typeof firstName' and 'typeof secondName' have no overlap.
  // Can't ever happen
}
```

### Constraints

Limiting the kinds of types that a type parameter can accept.

## References

1. https://youtu.be/BwuLxPH8IDs?t=7689
2. https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
3. https://github.com/typescript-cheatsheets/react-native
4. https://reactnative.dev/docs/0.60/typescript
5. [Call Signatures](https://www.typescriptlang.org/docs/handbook/2/functions.html#call-signatures) - describe callable with properties
6. [Contruct Signatures](https://www.typescriptlang.org/docs/handbook/2/functions.html#construct-signatures) - Invoking function with `new`
7.
