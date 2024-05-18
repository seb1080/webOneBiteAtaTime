# VueJS

This my personal notes about vueJS.

## MVVM

Vue use the Model-View-ViewModel architecture pattern.

|         View         |     ViewModel        |         Model          |
| -------------------- |:--------------------:| ----------------------:|
| Template or render() |    Vue instance      |        Back End    	   |

## Vue component Instance

```js
new Vue({
  data: { ... }
  props: { size: Number },
  computed: { fullname() { return this.name + ' ' + this.lastName } },
  methods: { go() { ... } },
  watch: { a (val, oldVal) { ... } },
  el: '#foo',
  template: '...',
  replace: true, // replace element (default true)

  // Vue Lifecycle hooks
  created () {},
  beforeCompile () {},
  compiled () {},
  ready () {}, // $el is inserted for the first time
  attached () {},
  detached () {},
  beforeDestroy () {},
  destroyed () {},

  // options
  directives: {},
  elementDirectives: {},
  filters: {},
  components: {},
  transitions: {},
  partials: {}
})
```

## Vue Lifecycle

![Vue Lifecycle](./vue-lifecycle.png)

## Vue Reactivity

![Vue Lifecycle](./vue-reactivity.png)

## JS Expressions

Enverything inside the moustache {{ }}, would be avaluated as JS.

Each binding can only contain one single expression

```js
<template lang="pug">
  div
    h1 {{age}}
    span {{ ok ? 'YES' : 'NO' }}
    p {{ message.split('').reverse().join('') }}
<template>

<script>
new Vue({
  el: '#app',
  data: {
    age: 27
  }
})
</script>
```

## Directives

Directives are special attributes with the v- prefix. The porpuse of a directive is to reactively apply effects to the DOM when the value of its expression change.

- v-if
- v-else
- v-else-if
- v-show
- v-for
- v-on
- v-model
- v-bind

## Shorthands

v-on:click="" === @click=""

v-bind:href="" === :href=""

### Arguments

Some directive can take "arguments"

```html
<a v-bind:href="url"> ... </a>
<!-- OR -->

  <!-- argument expression -->
<a v-on:click="doSomething"> ... </a>
```

```js
<template lang="pug">
  div
    a(v-bind:href="urlPath") stringUrl
<template>

<script>
new Vue({
  el: '#app',
  data: {
    urlPath: 'sblaisfernandez.com'
  }
})
</script>
```

### Modifiers

Some directive can take "modifiers". Exammple, .prevent call event.preventDefault()

```html
<form v-on:submit.prevent="onSubmit">...</form>
```

## Two-way Data Binding

You can use 'v-model' directive to create two-way data binding on form input.

```js
<template lang="pug">
  div
    input(v-model="msg")
    p {{ msg }}
<template>

<script>
new Vue({
  el: '#app',
  data: {
    msg: 'default message'
  }
})
</script>
```

## Methods and Events Handling

Use v-on directive to listen to DOM events and run JS when event is trigger.

A method invocation will always run the function whenever a re-render happens.

```js
<template lang="pug">
  div
    button(v-on:click="clikedBtn") firstBtn
    button(v-on:click="say('Hi')") say Hi
    button(v-on:click="say('Hello')") say Hello
    button(v-on:click="warn('Message', $event)") Warn Message
<template>

<script>
new Vue({
  el: '#app',
  data: {},
  methods: {
    clikedBtn: function(e) {
      console.log(e)
    },
    say: function(msg) {
      alert(msg)
    },
    warn: function(msg, event) {
      if (event) event.preventDefault()
        alert(msg)
    }
  }
})
</script>
```

### Events Modifiers

The events modifiers handle propagation of event in the DOM.

- .stop
- .prevent
- .capture
- .self
- .once
- .passive

## Computed Properties (CP)

The computed properties are cached based on their dependencies, a CP will only re-evaluate when some of its dependencies have changed.

```js
<template lang="pug">
  div
    p Reserved Message: "{{ reverseMsg }}"
<template>

<script>
new Vue({
  el: '#app',
  data: {
    msg: 'original message'
  },
  computed: {
    reverseMsg: function() {
      return this.msg.split('').reverse().join('')
    }
  }
})
</script>
```

### CP getters and setters

```js
<template lang="pug">
  div
    button(v-on:click="changeName") ChangeName
    button(v-on:click="changeNameSetter") ChangeNameSetter
<template>
<script>
new Vue({
  el: '#app',
  data: {
    fName: 'Seb',
    lName: 'Blais'
  },
  method: {
    changeName: function() {
      this.fName = 'Paco'
      this.lName = 'Andales'
    },
    changeNameSetter: function() {
      this.fullName = `paco Andales`
    }
  },
  computed: {
    fullName: function() {
      get: function() {
        return `${this.fName} ${this.lName}`
        },
      set: function(newValue) {
        const parts = newValue.split(' ')
        this.fName = parts[0]
        this.fName = parts[part.length - 1]
      }
    }
  }
})
</script>
```

## Watchers Properties (WP)

WP are more useful when you want to perform async or expensive operations in response to changing data, like a API call.

```html
<template lang="pug">
  div
    input(type="text" v-model="searchQuery")
    p(v-if="isSearching") Searching....
    div(v-else)
      ol
        li(v-for="result in results") {{ result }}
<template>

<script>
new Vue({
  el: '#app',
  data: {
    searchQuery: '',
    results: [],
    isSearching: false
  },
  method: {},
  watch: {
    searchQuery: function(query) {
      this.isSearching = true
      const vm = this
      setTimeout(() => {
        vm.result = ['JS', 'Python', 'Java']
        vm.isSearching = false
      }, 500)
    }
  }
})
</script>
```

## Filters

Filters can be use to apply common text formating. Filters can be use in 2 places {{ }} moustaches and v-bind expressions.

```js
<template lang="pug">
  div
    p {{ msg | capitalize | filterB }}
    span(v-bind:id="rawId | formatId")
<template>
<script>
new Vue({
  el: '#app',
  data: {
    msg: 'newe message'
  },
  filters: {
  capitalize: function (value) {
    if (!value) return ''
    value = value.toString()
    return value.charAt(0).toUpperCase() + value.slice(1)
  },
  filterB: function(val) {
    return val + 'B'
  }
}
})
</script>
```

## Components Basics

Components are reusable Vue instances with a name: `<custom-comp></custom-comp>`. Components can by Extends or Composes.

```html
<template>
  <input :placeholder="placeholder" />
</template>
<script>
  import SurveyInputBase from './SurveyInputBase.vue';
  export default {
    extends: SurveyInputBase,
    props: [ 'placeholder' ],
    data: function () {
      return {
        count: 0
      }
    }
  }
</script>
```

Data must be a function, so that each instance can maintain an independent copy of the returned data object.

Components can be locally registrated or globally register, it is a better practice to register components locally.

## Props

Props are custom attributes you can register on a component. Props attribute that are passed becomes property on that component instance.

All Props form a *one-way-down binding* between the child props and the parent one, when parent updates child update.

```js
<template>
  <blog-post v-bind:childprop="parentData"></blog-post>
  <blog-post title="My journey with Vue"></blog-post>
  <blog-post
    v-for="post in posts"
    v-bind:key="post.id"
    v-bind:title="post.title"
></blog-post>
<template>
<script>
new Vue({
  el: '#app',
  data: {
    title: 'Unique Title',
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' },
  ]
  }
})
</script>
```

### Props Types

Props can have specific group of Types : `String, Number, Boolean, Array, Object, Date,  Function, Symbol`.

```js
props: {
  title: String,
  likes: Number,
  isPublished: Boolean,
  commentIds: Array,
  author: Object
}
```
### Props Validations & Type Checks

Components can specify requirements for its props, such as the types.

*Note that props are validated before a component instance is created, so instance properties (e.g. data, computed, etc) will not be available inside default or validator functions.*

## Emits & events

*We recommend you always use kebab-case for event name*

In some context we may want to pass event and data from child to parent compoment.

`$emit()` can be call in the template or in the script tag. Once in the parent component the event will trigger a action.

```html
<!-- child componment -->
<button v-on:click="$emit('enlarge-text')">
  Enlarge text
</button>

<!-- parent componment -->
<blog-post
  v-on:enlarge-text="postFontSize += 0.1"
></blog-post>
```

We can pass data as a second argument to the $emit() function.

```html
<!-- child componment -->
<button v-on:click="$emit('enlarge-text', 0.1)">
  Enlarge text
</button>

<!-- parent componment -->
<blog-post
  ...
  v-on:enlarge-text="postFontSize += $event"
></blog-post>
```

## Slots

Slot element serve as distribution outlets for content. Slots can render template code, html or component.

To allow parent component to pass DOM elements to child component.

```html
<!-- Parent Component -->
<template>
  <div>
    <child-component>
      <p>I'm injected content from the parent!</p>
      <p>I can still bind to data in the parent's scope, like this! {{myVariable}}</p>
    </child-component>
  </div>
</template>

<!-- Child Component -->
<template>
  <div>
    <p>I'm the child component!</p>
    <slot><!-- Content from the parent gets rendered here. --></slot>
  </div>
</template>
```

### Names Slots

```html
<template>
      <!-- in the parent component -->
      <base-layout>
        <template slot="header">
          <h1>Here might be a page title</h1>
        </template>
        <p>A paragraph for the main content.</p>
        <p>And another one.</p>
        <template slot="footer">
          <p>Here's some contact info</p>
        </template>
    </base-layout>
    <!-- in the child component -->
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
  </div>
<template>
```

### Default Slot Content

The default Slot Content allow to define default content.

```html
<button type="submit">
  <slot>Submit</slot> // The default value of Sumbit can be replace.
</button>
```

### Compilation Scope

Everyting in the parent template is compiled in the parent scope, everything in the child template is compiled in the child scope.

### Scoped Slots

Scoped-slots allow to pass `template`, `component` or content from a parent to a child component.

```html
<ul>
  <li
    v-for="todo in todos"
    v-bind:key="todo.id">
    <!-- We have a slot for each todo, passing it the `todo` object as a slot prop. -->
    <slot v-bind:todo="todo">
      <!-- Fallback content -->
      {{ todo.text }}
    </slot>
  </li>
</ul>
```

#### Destructuring slot-scope



## Dynamic Component

Dynamic Component allow to swtich dynamicly between component.

```html
<!-- Component changes when currentTabComponent changes -->
<component v-bind:is="currentTabComponent"></component>
```

`Keep-alive` will cached the component instances once it have been created.

```html 
<keep-alive>
  <component v-bind:is="currentTabComponent"></component>
</keep-alive>
```

### Async Components

Vue allow to define a component as a factory function that asynchronously resolves your component definition. Vue will only trigger the factory function when the component needs to be rendered and will cache the result for future re-renders.

```js
Vue.component('async-example', function (resolve, reject) {
  setTimeout(function () {
    // Pass the component definition to the resolve callback
    resolve({
      template: '<div>I am async!</div>'
    })
  }, 1000)
})
```

## 

## Special Attributes

### key

### Refs

ref is used to register a reference to a element or a child component.


## Transitions & Animations

## Mixins

## Filters

## Plugins