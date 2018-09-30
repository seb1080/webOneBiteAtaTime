# Learning Process

1. **Deconstructing** Define the JS patterns to cover.

The skills will be properly acquire when I will by able to explain the patterns with code to someone. The patterns need to be implement in a markdown including code and explaination.
  
  - Learning JS DP
  
  - Learning JS DP for Front End Architecture (Vue.js or React.js) 


2. **Self-Correct** Identify the Js Patterns to be learn and redefine the learning goal.

3. **Removing barier to learning**
  - have a clean desk
  - have cofee cup on the desk
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
DP are categorize has: Creational, Structural, Behavioral.

- Design Patterns: represents good practice.
- Anti-Patterns: bad practice. Ex: modifiy the `Object` clas prototype.

Js have multiple design Patterns(DP), they can be Front End, back End or Isomorphic JS (Universal JS).

## Categorization

- Creational DP
- Structural DP
- Behavioral DP
- Concurrency DP
- Architectural DP

### Creational DP

Creational patterns focus on ways to create objects of classes.

- Singleton
- Abstract Factory
- Builder
- Factory Method
- Prototype
- Module

#### Singleton Pattern

In JS **Singleton** is used mostly for *Namespacing* and reducing the number of global variables created by the application. 

*Namespacing*: is a commonly structured as hierachies to allow reuse of name in different contexts. Ex: naming the file system, organizing variables or functions.

Since it is an object literal, it do not need to be instantiated and there is only one copy of the object. One caracteristic of the **Singleton** is the *immuability*. 

**The old way** using closures and IIFE it is possible to write and Store(Redux).
`UserStore` will be set to the result of the IIF - an object that exposes 2 functions, but that does not grant direct access to the collection of data.

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
// Singleton
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