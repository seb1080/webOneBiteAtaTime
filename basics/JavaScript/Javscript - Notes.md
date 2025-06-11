# Review of You don't know JS

- [You don't know JS](https://github.com/getify/You-Dont-Know-JS)

- [JS tutorial MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript)

## Values & Types

There is 7 types of values in ES2015

```bash
- Boolean
- String
- Number
- Object
- Null and Undefined
- Symbol
```

## Boolean

Boolean can be true or false.

## Number

A Number ca be -Infinity, +Infinity, NaN.

## String

In JS Strings are immutable. They have to be between '', "" or ``.

## Null

Null: is a empty or no-existent value. It most be assigned by the developer.

## Undefined

A variable that has no value is undefined. A variable have been declared, but not defined.

## Object

Object are not primitive data Type.

## Symbol

Symbol arrive with ES6. A Symbol is an immutable primitive value that is unique.

```js
var a;
typeof a;    // "undefined"

a = "hello world";
typeof a;    // "string"

a = 42;
typeof a;    // "number"

a = true;
typeof a;    // "boolean"

a = null;
typeof a;    // "object" -- weird, bug

a = undefined;
typeof a;    // "undefined"

a = { b: "c" };
typeof a;    // "object"
```

```js
let a = null;
console.log(a); // null
```

```js
let b;
console.log(b); // undefined
```

## Commun Javascript constructor and namespace

### Number constructor

### String constructor

### Temporal namespace

- [MDN Date constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)
- [Temporal](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Temporal)

Date represent a single moment in time in a platform-independent format. Date objects encapsulate an integral number that represents milliseconds since the midnight at the beginning of January 1, 1970, UTC (the epoch).

Temporal is not a constructor. It is a namespace like `Math` and `Intl`. It contains several classes and namespaces, each of which is designed to handle a specific aspect of date and time management.

## Short-circuiting in boolean operators

In x && y, y will not be evaluated if x evaluates to false, because the whole expression is guaranteed to be false.

In x || y, y will not be evaluated if x evaluated to true, because the whole expression is guaranteed to be true.

```js
The same can be used to fall back multiple times:
envVariable || configValue || defaultConstValue // select the first "truthy" of these

```

### Coercion

Coercion mean converting between types, Coercion comes in two forms in JavaScript: explicit and implicit.

Explicit coercion is simply that you can see obviously from the code that a conversion from one type to another will occur, where as implicit coercion is when the type conversion can happen as more of a non-obvious side effect of some other operation.

```js
// explicit coercion
var a = "42";
var b = Number( a );
a;    // "42"
b;    // 42 -- the number!

// implicit coercion
var a = "42";
var b = a * 1; // "42" implicitly coerced to 42 here
a;    // "42"
b;    // 42 -- the number!
```

### Truthy & Falsy

When a non-boolean value is coerced to a boolean, does it become true or false it depend

Specific list of the 6 'falsy' values:

- ""
- 0, -0,
- NaN
- null
- undefined
- false

Specific list of 'truthy' values:

- "hello"
- 42
- true
- [], {}, () => {} // Array, Object, Functions

It's important to remember that a non-boolean value only follows this "truthy"/"falsy" coercion if it's actually coerced to a boolean.

### Equality and Inequality

There are four equality operators:

- == (loose-equals),
- === (strict-equals),
- != (loose not-equals),
- !== (strict not-equals).

The ! forms are of course the symmetric "not equal" versions of their counterparts; non-equality should not be confused with inequality.

The loose-equality comparison == checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; === is often called "strict equality" for this reason.

## Function Scope

The `var` keyword is function scope or the global scope if at the top level. `let` and `const` are block scope.

### Hoisting

In JS, every `var` variable and function declaration will bring to the top of its current scope.

```js
var a = 2;
foo(); // declaration is 'hoisted'

function foo() {
      b = 3;
      console.log(b) // 3
      var b; // declaration is "hoisted"
}
console.log(a); // 2
```

## Function as Value

Function itself is a value, just like 42 or [1,2,3] are. A function itself can be a value that is assigned to variables, or pass to or returned from a function. Function should be consider has a expression.

**Assign a anonymous function**

```js
const foo = () => {}; // assign a anonymous function

let x = function bar() {};
```

## Closure

A closure is the combination of a function and the lexical environment within which that function was declared. In other words, a closure gives a function access to its outer scope. In JavaScript, closures are created every time a function is created, at function creation time.

```js
function init() {
  var name = "Mozilla"; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, that forms a closure
    console.log(name); // use variable declared in the parent function
  }
  displayName();
}
init();
```

- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)

Notice typeof "abc" returns "string", not string. Notice how in this snippet the a variable holds every different type of value, and that despite appearances, typeof a is not asking for the "type of a", but rather for the "type of the value currently in a." Only values have types in JavaScript; variables are just simple containers for those values.

### Object Methods

Objects.freeze(): Prevent the creation of new properties, existing properties cannot be removed, thier enumerability, configurability, writability, or value cannot be changed, and the object's prototype cannot be re-assigned.

## Arrays

An Array is an Object that holds values in a numerically indexed positions.

## Functions

Functions are subtype of Object. It can be called by other code or by itself or a variable refers to the function. A function in can be a declaration f(){} or expression f(){}.

```js
// function declaration
function getArea(width, height){
      return width * height;
}
console.log(getArea(2 * 4));

// function expression
const feetToMeter = function (feet) {
  return feet * 0.3048;
};
```

### Anonymous function

```js
function () {};
// or using the ECMAScript 2015 arrow notation
() => {};
```

### Named function

```js
function functionName() {};
// or using the ECMAScript 2015 arrow notation
const funcName() => {};
```

### Immediately Invoked Function Expressions (IIFEs)

IIFEs are use to create variable scope that wont't affect the surrounding code outside the IIFE.

- [MDN IIFE](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)

```js
// standard IIFE
(function () {
  // statements…
})();

// arrow function variant
(() => {
  // statements…
})();

// async IIFE
(async () => {
  // statements…
})();


var x = (function (){
 return 42;
})();
x; // 42
```

### Arrows Functions

The AF is a shorter syntax than a function expression and does not have its own 'this', 'arguments', 'super', 'new.target'. AF do not have their own 'this' value, the value of 'this' inside a AF is always inherited from the enclosing scope. AF cannot be used as constructors.

```js
() => {};

param => param + 1
```
