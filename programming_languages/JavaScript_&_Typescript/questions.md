Question: What's the difference between undefined and not defined in JavaScript ?

let x // declaring x
console.log(x) // undefined
console.log(y) // ReferenceError: y is not defined

Question: What is the difference betwween undefined and null ?

undefined: Variable have been created, but not value have been assigned to the variable.

null: The value have be explicitly assign to the variable by the developer.

typeof undefined // undefined
typeof null // "object"

Question: What will be the output of the following code?

```js
var y = 1;
if (function f() {}) {
  y += typeof f;
}
console.log(y);
```

Question: What is the difference between var, let, const ?

var is function scoped variable, 'var' variables get hoisted.

let and const have been add in ES6

let is block scoped function that allow reasignement

const is block scoped function that don't allow reasignement

Question: What is the difference between '==' and '===' ?

'==': loose-equals operator that will use implicit coercion to optimize the succes of equality. Will only look for equality of values.

'===' strict-equals operator that will not implicitly convert the type to match the corresponding value. Will look for equality of types and values.

Question: what are the 6 falsy values in JS ?

*false
*0
*""
*NaN
*null
*undefined

Question: What is the use of arrow functions ?

Arrow functions are use and like for there concise syntax. AF are anonymous function and change the 'this' binds in the function.

What is 'this' keyword in JavaScript?

The 'this' keyword have different between strict mode and non-strict mode.

In Global context, 'this' refers to the global object in strict mode or not.

```js
// In web browsers, the window object is also the global object:
console.log(this === window); // true
```

In a function, 'this' depend on how the function is called. In not strict mode, 'this' will default to the global object.

```js
// no stric mode
function f1() {
  return this;
}
// In a browser:
f1() === window; // true
// In Node:
f1() === global; // true
```

Strict mode the value of 'this' remains at whatever it was set to when entering the execution context.

```js
function f2() {
  "use strict"; // see strict mode
  return this;
}

f2() === undefined; // true
```

Question: What is prototypal inheritance ?

In JS every Object has a property prototype, when a Object is created from a parent Object it inherante the parent properties. If you need to create 100 000 child object then some 100 of them use a methods from the parent rater then having the method in all the child, the method can be add to the prototype of the parent then will be accesible to his child with out carrying arrow the method.

```js
// define a Object, using function has a constructor
const car = function(model) {
  this.model = model;
};
car.prototype.getModel = function() {
  return this.model;
};
const toyota = new car("toyota");
console.log(toyota.getModel());
```

Question: What is the diffenre between function declaration and function expression ?

function declaration is a the declaration of a named function vs function expression is the assignation of a anonymous function to a variable.

```
// function declaration
function getArea(width, height){
      return width * height;
}
console.log(getArea(2 * 4))

// function expression
const feetToMeter = function(feet) {
      return feet * 0.3048
}
```

console.log(funcD())
console.log(funcE())

function funcD() {
console.log('functiuon declaration')
}

var funcE = function() {
console.log('functiuon expression')
}

Question: What is promises and why do we use it?

The Promise object represents the eventual completion or failure of an asynchronous operation, and this resulting value.

JS Promise is a snippet of code that will execute with the expectation to return either (resolve or reject)

The Promise that have been introduced to JS with the ES6 implementation avoid using function callback making the code cleaner and easier to read and maintain.

Question: What is closure and how do you use it ?

A closure is the combination of a function and the lexical env. within that function was declared.

```js
var myFunc = makeFunc();
myFunc();

function makeFunc() {
  var name = "Mozilla";
  function displayName() {
    alert(name);
  }
  return displayName;
}
```

This code is working because JS form Closures. A closure is the combination of a function and the lexical environment within which that function was declared. This environment consists of any local variables that were in-scope at the time the closure was created. In this case displayName maintains a reference to it lexical environement.

Consequently, you can use a closure anywhere that you might normally use an object with only a single method.

Question: What is the Heap, the Call Stack, the Web API Container, the Callback Queue and the Event loop and how a callBack task get send to the stack ?

![V8 JS runtime Engine](../assets/img/JS_runtime_env.png)

Heap: The memory heap store variables and objects it is the mostly a unstructured region of memory.

Call Stack: It is the data structure that record the functions calls. During execution, we push function on the stack, and when we return from a function, we pop off the top of the stack.

JS Web APIs: Browser threads that handle async events like DOM events, http request, setTimeout.

Callback Queue: A message Queue, it is a list of messages to be processed and the associated callback functions to execute. When the stack have enough capacity, a message is taking from the queue then call a function to the Call Stack.

Event Loop: is responsible for the execution of the Callbacks in the Task Queue then pushing it in the stack, when it is empty.

Question: Explain the single thread execution of JS in the V8 engine ?

## What is the delete operator in JS?

The JavaScript delete operator removes a property from an object.

```js
var Employee = {
  firstname: "Mohammed",
  lastname: "Haddad"
};

console.log(Employee.firstname);
// expected output: "Mohammed"

delete Employee.firstname;

console.log(Employee.firstname);
// expected output: undefined
```

## What are the different types of errors in JavaScript?

There are three types of errors:

### Load time errors:

Errors which come up when loading a web page like improper syntax errors are known as Load time errors and it generates the errors dynamically.

### Run time errors:

Errors that come due to misuse of the command inside the HTML language.

### Logical Errors:

These are the errors that occur due to the bad logic performed on a function which is having different operation.

# WEB questions

## What are Javascript Cookies ?

An HTTP cookie (web cookie, browser cookie) is a small piece of data that a server sends to the user's web browser. The browser may store it and send it back with the next request to the same server.

It's used to tell if two requests came from the same browser, keeping a user logged-in.

The Domain and Path directives define the scope of the cookie: what URLs the cookies should be sent to.

### Session management

Logins, shopping carts, game scores, or anything else the server should remember.

### Personalization

User preferences, themes, and other settings

### Tracking

Recording and analyzing user behavior

```js
// Set-Cookie with Node.js
response.setHeader("Set-Cookie", ["type=ninja", "language=javascript"]);
```

Accesing Cookie in the Browser

```js
document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=strawberry";
console.log(document.cookie);
// logs "yummy_cookie=choco; tasty_cookie=strawberry"
```
