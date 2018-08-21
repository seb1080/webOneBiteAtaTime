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