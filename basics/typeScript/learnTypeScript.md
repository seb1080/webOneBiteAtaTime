# TypeScript Note

TypeScript is a language that aims at easing development of large scale applications written in JavaScript. TypeScript is just like ES2015 with type-checking.

# Hello World

```ts
class Student {
    fullName: string; // defining the type ofa attribut

    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = `${Person} ${middleInitial} ${lastName}`;
    }
}
// 
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

# Installation & lauch

```ts
npm install -g typescript

// to compile
tsc app.ts
```

# Primitive Types

Type      | Code      
--------- | ----
Any type  | `any` (explicitly untyped) 
void type | `void` (null or undefined, use for function returns only)
Boolean   | `boolean`
Number    | `number`
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

# Names types

Interface , Class, Enum



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
