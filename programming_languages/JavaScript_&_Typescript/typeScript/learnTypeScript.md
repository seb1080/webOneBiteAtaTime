# TypeScript Note

TypeScript is a language that aims at easing development of large scale applications written in JavaScript. TypeScript is just like ES2015 with type-checking.

## Installation & lauch

```ts
npm install -g typescript

// to compile
tsc app.ts
```
## Hello World

```ts
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${Person} ${middleInitial} ${lastName}`;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}
// type of the function
function greeter(person : Person): string {
  return `Hello, ${person.firstName} ${person.lastName}`;
}

let user = new Student("Jane", "M.", "User");

document.body.innerHTML = greeter(user);
```

## Primitive Types

Type      | Code      
--------- | ----
Any type  | `any` (explicitly untyped) 
Number    | `number`
void type | `void` (null or undefined, use for function returns only)
Boolean   | `boolean`
String    | `string`
Undefined | `undefined`
Null      | `null`
never     | `never`
unknow    | `unknow`
date      | `date`
object    | `object`

## Type assertions

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data.

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// OR
let strLength: number = (someValue as string).length;
```

### Type Inference
```ts
var num = 1; // Inference

var num: number = 2; // annotation

function addNumbers(num1: number, num2: number): number {
  return num1 + num2;
}
```

## Ambient Declarations
`declare` is a hint for a compiler that the variable has been created outside the actual file.

`*.d.ts` files include all the types for the corresponding packages.
top of the file // <reference parth ="jquery-1.8.d.ts">

[DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped)

```ts
declare var document;

document.title = "Hello";
```

## Function
```ts
const squareItConventional = function (h: number = 10, w: number = 10): number {
  return h * w;
};

const squareItSimplest = (h: number = 10, w: number = 10) => h * w;
```

### Optional parameters
```ts
const squareIt = function (rect: {h: number, w?: number} ) {
  if (rect.w === undefined) {
    return rect.h * rect.h;
  }
  return rect.h * rect.w;
}
```

### Defaults parameters 
```ts
const squareIt = function (rect: {h: number = 10, w: number = 10} ) {
  return rect.h * rect.w;
}
```

### Names types

Interface , Class, Enum

## Interfaces

Interfaces are used to type-check whether an object fits a certain structure.

*Interfaces provide code contract to ensure consistency across objects. The compiler will enforce the contract.

```ts
interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person): void{
  console.log(`Hello, ${person.firstName} ${person.lastName}`);
}

let user = { firstName: "Jane", lastName: "User" };
document.body.innerHTML = greeter(user);
```
### Optional Members
```ts
interface IAutoOptions {
  engine: IEngine;
  basePrice:number;
  make?: string; // ? Optional Member
}
```

## Classes
```ts
class Menu {
  // Our properties:
  // By default they are public, but can also be private or protected.
  items: Array<string>;  // The items in the menu, an array of strings.
  private _pages: number;         // How many pages will the menu be, a number.

  // A straightforward constructor. 
  constructor(item_list: Array<string>, pages: number) {
    // The this keyword is mandatory.
    this.items = item_list;    
    this.pages = pages;
  }

  // Methods || Functions
  list(): void {
    console.log("Our menu for today:");
    for(var i=0; i<this.items.length; i++) {
      console.log(this.items[i]);
    }
  }
  // Properties
  get pages(): number {
    return this._pages;
  }

  set pages(value: number) {
    if (value == undefined) throw `Pages number most be define`;
    this._pages = value;
  }
} 

// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

// Call the list method.
sundayMenu.list();
```

### Extending Type
```ts
class ChildClass extends ParentClass {
  constructor() {
    super();
  }
}
```




### Casting Types
```ts
var table: HTMLTableElement = document.createElement(`table`); // failed

var table: HTMLTableElement = <HTMLTableElement>document.createElement(`table`); // Success
```



## Enum, Array, Tuples
```ts
enum Categorie { Biography, Poetry, Fiction } // 0, 1, 2

enum Categorie { Biography = 2, Poetry = 0, Fiction = 1 } // 2, 0, 1

const favoriteCategory: Category = Category.Biography;

let strArray1 = string[] = ["here", "are", "strings"];
let strArray2 = Array<string> = ["here", "are", "strings"];
let tuple = any[] = [42, true, "strings"];
```

## Modules

Modules allow for better `Separation` of concerns, `maintainability`, `testing`, `reusable`, they can be implicite or explicite.

Modules are `flexible`, Modules can be extend and Modules are `Open` you can import and export from Modules.

```ts
// explicite module
module dataService {

}
// implicite module
class TestClass implements ITest {
  private a =2;
  b = 4;
};
const testClass = new TestClass();
```
### Asynchronous Module Definition (AMD)
- Manage Dependencies
- Loads them asynchronously

### Namespaces

Namespaces are simply named javaScript object in the global namespace.




## Generics

## declare keyword

The TypeScript `declare` keyword is used to declare variables that may not have originated from a TypeScript file.

# References

[Pluralsight](https://www.pluralsight.com/courses/typescript)

[Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

[Reference](https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes)

[Devhints Cheatsheets](https://devhints.io/typescript)
