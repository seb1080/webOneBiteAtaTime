# Learning Process

1. **Deconstructing** Define the JS patterns to cover.

The skills will be properly acquire when I will by able to explain the patterns with code to someone. The patterns need to be implement in a markdown including code and explaination.
  
  - Learning JS DP
  
  - Learning JS DP for Front End Architecture (Vue.js or React.js) 


2. **Self-Correct** Identify the Js Patterns to be learn and redefine the learning goal.

3. **Removing barier to learning**
  - have a clean desk
  - have coffe cup on the desk
  - have a apple on the desk
  - have delicious chocolate bar on the desk
  - have water to the desk
  - have great chair, keyboard, mouse, 2 monitors
  - have ritual of schedule learning time during the week

4. **Pre-commit**
  - Do the research phase of 2-3 hrs.
  - Define in the commitment of 20 hrs is worted.
  - Put in place the scheduale to learn the next skill.
  - Evaluate what could interfer the success of the time frame.
  - Have a ultimate goal to over at the end of the learning process and a reward.
  - Have multiple gaol and reward during the learning process.

----------------------------------------------------------------------------------------

# Learning JS Design Patterns

Design patterns are reusable solution to commonly occuring problems in software design.
Patterns are about reusable designs and interactions of objects.

The 23 gang og Four(GoF) patterns are generally consided the fondation for all other patterns.
DP are categorize has: Creational, Structural, Behavioral, Concurrency, Architectural.

- Design Patterns: represents good practice.
- Anti-Patterns: bad practice. Ex: modifiy the `Object` clas prototype.

Js have multiple design Patterns(DP), they can be Front End, back End or Isomorphic JS (Universal JS).

### Creational DP

Creational patterns focus on ways to create objects of classes.

- Singleton
- Abstract Factory
- Abstract Factories
- Prototype
- Mixins
- Builder
- Factory Method
- Module

_Reference_

[JavaScript Patterns](http://shop.oreilly.com/product/9780596806767.do)
[JavaScript Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

#### Singleton Pattern

**Singleton** is thus know because it restricts instantiation of a class to a single object.
It differ from static classes as we can delay their initialization, because it may require some information that is not available during the initialization time.

In JS, **Singleton** serve as a shared resource *namespacing* which isolate code from the global namespace, to provide a single point of access for functions.

One caracteristic of the **Singleton** is the *immuability*.

**The old way** using closures and IIFE it is possible to write and Store(Redux).
`UserStore` will be set to the result of the IIFE - an object that exposes 2 functions, but that does not grant direct access to the collection of data.

```js
var UserStore = (function(){
  var _data = [];

  function add(item){
    _data.push(item);
  }
  function get(id){
    return _data.find(d => {
      return d.id === id;
    });
  }
  return {
    add: add,
    get: get
  };

}());
```

**The ES2015+ way**
```js
const _data = [];

const UserStore = {
  add: item => _data.push(item),
  get: id => _data.find(d => d.id === id)
}

Object.freeze(UserStore)
export default UserStore.
// OR
class UserStoreB {
  constructor(){
    this._data = [];
  }
  add(item) {
    this._data.push(item)
  }
  get(id){
    return this._data.find(d => d.id === id)
  }
}
const instance = new UserStoreB();
Object.freeze(instance);
export default instance;
```

```js
// Basic Singleton
const singleton = { 
  attr: 1, 
  attr1: 'value'
  
  method: function() {
    return
  }
}

singleton.attr++;
singleton.method();
```

**JS Namespacing**

Using singleton for namespace/packages allow for better organisation of the code into logical chunks. Using *Namespaces* moves your code from the global context to the Singleton, leading to fewer accidental overwrites and bugs. 

```js
// Object Literal
let Namespace = {
  Util: {
    util_method1: function() { return },
    util_method2: function() { return },
  },
  Ajax: {
    ajaxCall: function() { return data }
  },
  someMethod: function() {}
}
// Referencing the methods
Namespace.Util.util_method1();
Namespace.Ajax.ajaxCall();
Namespace.someMethod();
```

#### Factory Pattern

The **Factory** pattern concerned wit the notion of creating objects. it doesn't explicitly require us to use a constructor. The **Factory** pattern provide a generic interface for creating objects, where we can specify the type of factory object we wish to be created.

**When to use**
* when a object involve a high level of complexity.
* When a high
* When working with high number of object sharing the same properties
* This is useful for decoupling.

```js
// A constructor to create new Car 
function Car( options ){
  this.doors = options.doors || 4;
  this.state = options.state || 'new';
  this.color = options.color || "silver";
}
// A constructor to create new Truck
function Truck( options ){
  this.state = options.state || 'used';
  this.wheelSize = options.wheelSize || 'large';
  this.color = options.color || "blue";
}

function VehicleFactory() {
  VehicleFactory.prototype.vehicleClass = Car;

  VehicleFactory.prototype.createVehicle = function( options ) {
      switch(options.vehicleType) {
        case "car":
          this.vehiculeClass = Car;
          break;
        case "truck":
          this.vehiculeClass = Truck;
          break;
      }
      return new this.vehiculeClass(options)
  }
};
const canFactory = new VehiculeFactory()
const var = carFactory.createVehicule({
  vehiculeType: 'car',
  color: 'red',
  doors: 6
})
// We expect that car is a instance of the vehiculeClass/prototype Car
console.log( car instanceof Car);
```

```js
/* The ES2015+ way */
class Car {
  constructor({ doors, state, color }) {
    this.doors = doors || 4;
    this.state = state || "brand new";
    this.color = color || "silver";
  }
}

class Truck {
  constructor({state, wheelSize, color }) {
    this.state = state || "used";
    this.wheelSize = wheelSize || "large";
    this.color = color || "blue";
  }
}

class VehicleFactory {
  constructor(vehicleType){
    this.vehicleClass = Car; // default vehiculeClass
    if (vehicleType === "truck") {
        this.vehicleClass = Truck;
    }
  }

  createVehicle(options) {
    switch(options.vehicleType) {
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck;
        break;
    } 
    return new this.vehicleClass( options );
  }
}
//Instatiation
const carFactory = new VehicleFactory();
const car = carFactory.createVehicle( {
            vehicleType: "car",
            color: "red",
            doors: 4 } );

console.log( car instanceof Car ); // true
```

#### Constructor Pattern

Object Constructors are used to create specific types of objects.

**The old way**
```js
var newObject = {};

var newObj = Object.create(Object.prototype)

var newObj = new Object();

// 4 ways to assign keys and values to an object.
// Set properties
newObj.somekey = 'Hello World'
// Get properties
var value = newObj.someKey

// Square Bracket Syntax
newObj["someKey"] = "Hello World"
var val = newObj["someKey"] 

// Object.defineProterty
object.defineProterty( newObj, "someKey", {
  value: "someVal",
  writable: true,
  enumerable: true,
  configurable: true
})
// Or
var defineProp = function(obj, key, value){
  var config = {
    value: value,
    writable: true,
    enumerable: true,
    configurable: true
  };
  Object.defineProterty(obj, key, config)
};
// To use,  create a new empty "person" object
var person = Object.create( Object.prototype)

defineProp( perosn, "car", "Delorean")
defineProp( perosn, "dateOfBirth", "1981")

// Object.defineProperties
Object.defineProperties(newObj, {
  "someKey": {
    val: "Hello",
    writable: true
  },
  "secondKey": {
    val: "World",
    writable: false
  },
})

// By prefixing a function with "new" a function can behave like a constructor
function Car(model, year, miles){
  this.model = model;
  this.year = year;
  this.miles = miles;

  this.toString = function() {
    return this.model + " has done " +  this.miles + "miles";
  };
}
var civic = new Car("Honda Civic", 2009, 20000)
console.log( civic.toString() )
```

**The ES6+ way**
```js
class Car {
  constructor({ model, year, miles}) {
    this.model = model,
    this.year = year,
    this.miles = miles
  }
  toString() {
    return `${this.model} has done ${this.miles} miles.`
  }
}

const jeep = new Car("Jeep", 2009, 20000)
console.log( jeep.toString() )
```


#### Abstract Factories Pattern

#### Prototype Pattern

#### Mixins Pattern

#### Observer Pattern


### Structural

Structural patterns focus on ways to manage relationships between object to make the application architecture scalable.

- Adapter
- Bridge
- Composite
- Decorator
- Facade
- Flyweight
- Proxy

### Behavioral DP

Behaviroral patterns focus on communication between objets.

- Chain of Resp.
- Command
- Interpreter
- Iterator
- Mediator
- Memento
- Observer
- Publish/Subscribe
- State
- Strategy
- Template Method
- Visitor

### Concurrency DP

These DP deal with multi-threaded programming paradigms.

### Architectural DP

An **Architectural Pattern** is a general, reusable solution to a commonly occuring problem in software architecture within a given context. Achitectural patterns are similar to software design pattern but have a broader scope.

- Model-View-Controller Pattern
- Model-View-ViewModel Pattern
- Model-View-Presenter Pattern
- Layered Pattern
- Client-Server Pattern
- Master-Slave Pattern
- Pipe-filter Pattern
- Broker Pattern
- Peer-to-peer Pattern
- Event-bus Pattern
- Blackboard Pattern
- Interpreter Pattern

#### Model-View-Controller Pattern (MVC)

Divide the application in 3 parts:
  * **Model**: contain the core fonctionality and data
  * **View**: display the information to the user
  * **Controller**: handle the input from the user

#### Model-View-ViewModel Pattern (MVVM)

Divide the application in 3 parts:
  * **Model**: Represents the actual State of the application.
  * **View**: Represent the layout and apperance of what a user interact with.
  * **ViewModel**: It is a abstraction of the **View** exposing public proterties and commands. MVVM have a binder, which automates communication between the view and its bound properties in the view model.

  **MVVM** vs. **MVP** A view directly binds to properties on the viewModel to send and receive updates.

![Vue.js Design Pattern](./img/MVVMPattern.png)

    **View**               **ViewModel**           **Model**        **Lib**                 
        DOM       <--->         Vue       <---       Vuex   <---     DAL     <---  API
                                          --->              --->             --->
|---------------|           App.js                      Store        
|               |           -Page(Vue-Router) 
|               |            -Layout(mobile,
|               |              table, desktop)
|               |             -Smart Comp.    
|               |              -Dumb Comp.
|---------------|


[Architectural pattern](https://towardsdatascience.com/10-common-software-architectural-patterns-in-a-nutshell-a0b47a1e9013)

# Vocabulary

*Namespacing*: is a commonly structured as hierachies to allow reuse of name in different contexts. Ex: naming the file system, organizing variables or functions.

*Duck typing*: The duck test —"If it walks like a duck and it quacks like a duck, then it must be a duck"— to determine if an object can be used for a particular purpose, an object's suitability is determined by the presence of certain methods and properties, rather the type of the object itself.

# References

[pluralsight](https://www.pluralsight.com/courses/javascript-practical-design-patterns)

[joezimjs](https://www.joezimjs.com/javascript/javascript-design-patterns-singleton/)

[blog post](https://itnext.io/anyway-heres-how-to-do-ajax-api-calls-with-vue-js-e71e57d5cf12)

[doFactory](https://www.dofactory.com/javascript/design-patterns)

[Tut plus](https://code.tutsplus.com/tutorials/understanding-design-patterns-in-javascript--net-25930)

[Scotch.io](https://scotch.io/bar-talk/4-javascript-design-patterns-you-should-know)

[JS Design Patterns](https://addyosmani.com/resources/essentialjsdesignpatterns/book/)

[nodeJistsu](https://blog.nodejitsu.com/scaling-isomorphic-javascript-code/)

[Node.js Design Patterns](https://blog.risingstack.com/fundamental-node-js-design-patterns/)


[Architecture Patterns](http://pubs.opengroup.org/architecture/togaf8-doc/arch/chap28.html)