# VueJS CheatSheet

This is a Cheat Sheet for Vue.js.

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

## Watchers Properties

Watchers are more useful when you want to perform async or expensive operations in response to changing data, like a API call.

```js
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

## Props

Props are custom attributes you can register on a component. Props attribute that are passed becomes property on that component instance.

```js
<template>
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

## Emits

## Slots

Slot element serve as distribution outlets for content. Slots can render template code, html or component.

```html
<template>
<navigation-link url="/profile">
  Your Profile
</navigation-link>

<a v-bind:href="url" class="nav-link">
  <slot></slot><!--Display Your Profile-->
</a>

<template>
```

### Names Slots

```html
<template>
    <!-- in the child component -->
    <div class="container">
      <header>
        <slot name="header"></slot>
      </header>
      <main>
        <slot name="main"></slot>
      </main>
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

Everyting in the parent template is compiled in the parent scope; everything in the child template is compiled in the child scope.

### Scoped Slots

```html
<ul>
  <li
    v-for="todo in todos"
    v-bind:key="todo.id">
    <!-- We have a slot for each todo, passing it the -->
    <!-- `todo` object as a slot prop.                -->
    <slot v-bind:todo="todo">
      <!-- Fallback content -->
      {{ todo.text }}
    </slot>
  </li>
</ul>
```

## Dynamic Component

Dynamic Component allow to swtich dynamicly between component.

```html
<!-- Component changes when currentTabComponent changes -->
<component v-bind:is="currentTabComponent"></component>
```

## Special Attributes

### key

ref is used to register a reference to a element or a child component.

# Vue CLI

# Vuex

Vues is a state management pattern + library for Vue.js applications, it serve a centralized store for all the components.

## State

Vuex uses a single state tree that object contain all the application level state and serves as the "single source of truth".

The best way to accesss the state of the store is by passing by a computed property.

```js
  computed: {
    count () {
      return this.$store.state.count
    }
  }
```

### The mapState Helper

Whene a component need to access multiple store state or getters the mapState can help by generating getter functions.

## Getters

Getters are computed properties for the stores. Like a CP, a getter result is cached based on its dependencies, and will only re-evaluate when some of its dependencies have changed.

```js
  computed: {
    count () {
      return this.$store.getters.doneTodosCount
    }
  }
```

### mapGetters Helper

The mapGetters helper simply maps store getters to local CP.

```js
  computed: {
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter'
    ])
  }
```

## Mutations

To change the state of the store it is needed to commit a mutation.

# Vue Router

# Vue DevTools
