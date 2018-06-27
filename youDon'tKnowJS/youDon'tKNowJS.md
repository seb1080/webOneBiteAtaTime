# Review of the ES for Everyone

Ref : [wesbos](https://courses.wesbos.com/account/)

      [MDN Doc](https://developer.mozilla.org)


## Review of You don't know JS 

[You don't know JS](https://github.com/getify/You-Dont-Know-JS)

There is 7 types of values in ES2015
* string
* number
* boolean
* null and undefined
* object
* symbol

Notice typeof "abc" returns "string", not string. Notice how in this snippet the a variable holds every different type of value, and that despite appearances, typeof a is not asking for the "type of a", but rather for the "type of the value currently in a." Only values have types in JavaScript; variables are just simple containers for those values.


```js
var a;
typeof a;				// "undefined"

a = "hello world";
typeof a;				// "string"

a = 42;
typeof a;				// "number"

a = true;
typeof a;				// "boolean"

a = null;
typeof a;				// "object" -- weird, bug

a = undefined;
typeof a;				// "undefined"

a = { b: "c" };
typeof a;				// "object"
```
### Coercion

Coercion meen converting between types, Coercion comes in two forms in JavaScript: explicit and implicit. 

Explicit coercion is simply that you can see obviously from the code that a conversion from one type to another will occur, where as implicit coercion is when the type conversion can happen as more of a non-obvious side effect of some other operation.

```js
// implicit coercion
var a = "42";
var b = Number( a );
a;				// "42"
b;				// 42 -- the number!

// explicit coercion
var a = "42";
var b = a * 1;	// "42" implicitly coerced to 42 here
a;				// "42"
b;				// 42 -- the number!
```

### Truthy & Falsy

When a non-boolean value is coerced to a boolean, does it become true or false it depend

Specific list of 'falsy' values: 
*""
*0, -0, NaN
*null, undefined
*false

Specific list of 'truthy' values:
*"hello"
*42
*true
*[], {}, () => {} // Array, Object, Functions

It's important to remember that a non-boolean value only follows this "truthy"/"falsy" coercion if it's actually coerced to a boolean

### Equality

There are four equality operators: 
* == (loose-equals), 
* === (strict-equals), 
* != (loose not-equals), 
* !== (strict not-equals). 

The ! forms are of course the symmetric "not equal" versions of their counterparts; non-equality should not be confused with inequality.

The loose-equality comparison == checks for value equality with coercion allowed, and === checks for value equality without allowing coercion; === is often called "strict equality" for this reason.

### Inaquality



