# TypeScript Note

TypeScript is a language that aims at easing development of large scale applications written in JavaScript. TypeScript is just like ES2015 with type-checking.

# Installation & lauch

```ts
npm install -g typescript
```

```ts
// to compile
tsc app.ts
```

```ts
// Hello World Example
function greeter(person: string) {
    return `Hello, ${person}`;
}
let user = [0, 1, 2];
document.body.innerHTML = greeter(user);
```

# Primitive Types


### Primitive Types
Type      | Code      
--------- | ----
Any type  | `any` (explicitly untyped) 
void type | `void` (null or undefined, use for function returns only)
Boolean   | `boolean`
Number    | `number`
String    | `string`





## Static Typing

It is posisible to declare the types of variable and the compiler will make sure that aren't assigned thel wrong types of vlaues.

```ts
let burger: string = 'hamburger', // String 
    calories: number = 300,       // Numeric
    tasty: boolean = true;        // Boolean

// The function expects a string and an integer.
// It doesn't return anything so the type of the function itself is void.

function speak(food: string, energy: number): void {
  console.log("Our " + food + " has " + energy + " calories.");
}

speak(burger, calories);
```

## Type annotations

`: string` add to a function argument will define the type of the argument.

```ts
* Number, String, Boolean, Any , Arrays Void
```

```ts 
let sentence: string = `Hello, my name is ${ fullName }.` 
//   varName   type       value

// Array
let list: number[] = [1, 2, 3];
let list: Array<number> = [1, 2, 3];

// Any
let notSure: any = 4;
```

## Enum

```ts
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
```

## Void

```ts
function warnUser(): void {
    console.log("This is my warning message");
}
```

## Never

```ts
// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}
```

## Object

```ts
declare function create(o: object | null): void;
create({ prop: 0 }); // OK
create(null); // OK
```

## Type assertions

Type assertions are a way to tell the compiler “trust me, I know what I’m doing.” A type assertion is like a type cast in other languages, but performs no special checking or restructuring of data.

```ts
let someValue: any = "this is a string";
let strLength: number = (<string>someValue).length;
// OR
let strLength: number = (someValue as string).length;
```


## Interfaces

Interfaces are used to type-check whether an object fits a certain structure.

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

## Classes

```ts
class Menu {
  // Our properties:
  // By default they are public, but can also be private or protected.
  items: Array<string>;  // The items in the menu, an array of strings.
  pages: number;         // How many pages will the menu be, a number.

  // A straightforward constructor. 
  constructor(item_list: Array<string>, total_pages: number) {
    // The this keyword is mandatory.
    this.items = item_list;    
    this.pages = total_pages;
  }

  // Methods
  list(): void {
    console.log("Our menu for today:");
    for(var i=0; i<this.items.length; i++) {
      console.log(this.items[i]);
    }
  }

} 

// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

// Call the list method.
sundayMenu.list();
```

## Generics

## Modules


## declare keyword

The TypeScript declare keyword is used to declare variables that may not have originated from a TypeScript file.



# References

[Handbook](https://www.typescriptlang.org/docs/handbook/basic-types.html)

[Reference](https://tutorialzine.com/2016/07/learn-typescript-in-30-minutes)

[Devhints Cheatsheets](https://devhints.io/typescript)
