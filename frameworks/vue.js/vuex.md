# Vuex

Vues is a state management pattern + library for Vue.js applications, it serve a centralized store for all the components.

1. Vuex stores are reactive, Vue component will update if state change.

2. The only way to change a store's state is by explicitly committing mutations.

```js
// Make sure to call Vue.use(Vuex) first if using a module system

const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

// call the increment mutations trought a commit to leave a trace
store.commit('increment') 

console.log(store.state.count) // -> 1
```

### Global Store

By injecting the `store` into the root component it will be available to all childs.
That operation will make `this.$store` available to all childs.

```js
const app = new Vue({
  el: '#app',
  // provide the store using the "store" option.
  // this will inject the store instance to all child components.
  store,
  components: { Counter },
  template: `
    <div class="app">
      <counter></counter>
    </div>
  `
})
```

## State

Vuex uses a single state tree that object contain all the application level state and serves as the *single source of truth*.

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

```js
import { mapState } from 'vuex'
// ...
  computed: {
    localComputed () { /* ... */ },
    ...mapState([
      count: state => state.count,
        countAlias: 'count',
         countPlusLocalState (state) {
      return state.count + this.localCount
    },
    'countAll'
    ])
  }
```

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
import { mapGetters } from 'vuex'
// ...
  computed: {
    localComputed () { /* ... */ },
    ...mapGetters([
      'doneTodosCount',
      'anotherGetter'
    ])
  }
```

## Mutations

To change the state of the store it is needed to commit a mutation. Each mutation has a string *type* and a *handler*.

```js
const store = new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    // increment is the string type, (state, payload) { } is the handler
    increment (state, n) {
    state.count += n
  }
  }
})
```

To call a mutation handler, you need to call `store.commit('increment', 10)`.

### Mutations Follow Vue's Reactivity Rules

1. Prefer initializing your store's initial state with all desired fields upfront.

2. To add new properties to a Object: `Vue.set(obj, 'newProp', 123)`.

*Mutation must be Synchonous*

### MapMutations

`mapMutations` helper which maps component methods to `store.commit`


```js
import { mapMutations } from 'vuex'

export default {
  // ...
  methods: {
    ...mapMutations([
      'increment', // map `this.increment()` to `this.$store.commit('increment')`

      // `mapMutations` also supports payloads:
      'incrementBy' // map `this.incrementBy(amount)` to `this.$store.commit('incrementBy', amount)`
    ]),
    ...mapMutations({
      add: 'increment' // map `this.add()` to `this.$store.commit('increment')`
    })
  }
}
```

## Actions

Actions are like mutations, but instead of mutating the state, actions commit mutations and Actions can contain arbitrary asynchronous operations.

```js
const store = new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    increment (state) {
      state.count++
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    },
    incrementAsync ({ commit }) {
    setTimeout(() => {
      commit('increment')
    }, 1000)
  }
  }
})
```

Action are triggered by `store.dispatch({type: 'increment', amount: 10})`.

### mapActions Helper

Actions can be dispatch with `this.$store.dispatch('actions')` or use `mapActions`.

```js
import { mapActions } from 'vuex'

export default {
  // ...
  methods: {
    ...mapActions([
      'increment', // map `this.increment()` to `this.$store.dispatch('increment')`

      // `mapActions` also supports payloads:
      'incrementBy' // map `this.incrementBy(amount)` to `this.$store.dispatch('incrementBy', amount)`
    ]),
    ...mapActions({
      add: 'increment' // map `this.add()` to `this.$store.dispatch('increment')`
    })
  }
}
```

The `store.dispatch()` method can handle *Promise* and can also return *Promise*.

## Modules

A Vuex store can be divide into Modules. Each module contains its own state, mutation, actions, getters and nested modules.

```js
const moduleA = {
  state: { ... },
  mutations: { ... },
  actions: { ... },
  getters: { ... }
}

const moduleB = {
  state: { ... },
  mutations: { ... },
  actions: { ... }
}

const store = new Vuex.Store({
  modules: {
    a: moduleA,
    b: moduleB
  }
})
```