# Vue Router

Vue Router is the official router for Vue.js. It deeply integrates with Vue.js core to make building SAP.

## Installing vue-Router

```js
//In the main.js file of the vue projet.
import VueRouter from 'vue-router' // import vue-router

Vue.use(VueRouter) // passing VueRouter to use.()

// Define some routes
const routes = [
  { path: '/home', component: Home },
  { path: '/about', component: About }
]
// Create the router instance and pass the `routes` option
const router = new VueRouter({ routes })

new Vue({
    el: '#app',
    render: h => h(App),
    router: router // Pass the router to the Vue instance
})
```
## Using Vue-Router

```html
<!-- Vue Router can be use in the templating. -->
<div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- `<router-link>` will be rendered as an `<a>` tag by default -->
    <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link>
  </p>
  <router-view></router-view>
```
Once the router have been injected into the Vue instance, we get access to `this.$router` and the current route as `this.$route` inside all component.
```js
// Home.vue
export default {
  computed: {
    username () {
      return this.$route.params.username // Accessing this.$route.params
    }
  },
  methods: {
    goBack () {
      window.history.length > 1
        ? this.$router.go(-1)
        : this.$router.push('/')
    }
  }
}
```

# Dynamic Router Matching