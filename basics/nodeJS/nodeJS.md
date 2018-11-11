# NodeJS

...

# Global object

The global object is the top-level scope, it is `global` in Node.js and `window` in the browsers. It is accessible from any where in any files.

```js
// Example of Global Object in Node.js
global.console.log();

global.setTimeout();
global.clearTime();

global.setInterval();
global.clearInterval();

// Example of Global Object in a Browser
window.console.log();

window.setTimeout();
window.clearTime();

window.setInterval();
window.clearInterval();
```

## Scopes of Variables

Inside of Node.js, the top-level scope is not the global scope, it is the local scope of the module. In the comparaison in the browser the top-level scope is the `window` Object.

So in the browser, if we create a variable `let newVariable = 10` 

it can also be represent as `let window.newVariable = 10`


# Node Module System

In the Node.js module system, each file is treated as a separate module.

```js
Module {
  id: '.',
  exports: {},
  parent: null,
  filename: 'C:\\Users\\sebas\\sandbox\\learnNodeJS\\app.js',
  loaded: false,
  children: [],
  paths: [ 'C:\\Users\\sebas\\sandbox\\learnNodeJS\\node_modules',
     'C:\\Users\\sebas\\sandbox\\node_modules',
     'C:\\Users\\sebas\\node_modules',
     'C:\\Users\\node_modules',
     'C:\\node_modules'
  ]
}
```

At run time Node.js module will be wrap into a IIEF.

```js
(function (exports, require, module, __filename, __dirname) {

})
```

The keyword `require` have to be use to import module in node.js.

```js
const path = require('path')
const os = require('os')
const fs = require('fs')

```
# Events



```js
// class EventEmitter
const EventEmitter = require('events')


```






```js

```


# References

[nodeJS Documentation](https://nodejs.org/api/modules.html)

[MDN Global Object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)