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

### Dynamic Router Matching

Dynamic Router Matching allow to specify a dynamic segments

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/user/:id', component: User }
  ]
})
```

A Route can have multiple dynamic segments.

|     pattern         |  matched path        |     $route.params          |
| ------------------- |:--------------------:| --------------------------:|
| /user/:name         | /user/seb1080	     | { username: 'evan' }  	  |
|/user/:name/post/:id | /user/seb1080/post/1 | { username: 'evan', id:1 } |

```js
const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/user/:id', component: User }
  ]
})
```

### Nested Routes

Apps UI are composed of nested components. It can be a good idea to structure the nested compoments and the nested URL to getter.

/user/foo/profile                     /user/foo/posts
+------------------+                  +-----------------+
| User             |                  | User            |
| +--------------+ |                  | +-------------+ |
| | Profile      | |  +------------>  | | Posts       | |
| |              | |                  | |             | |
| +--------------+ |                  | +-------------+ |
+------------------+                  +-----------------+

The `<router-view />` tag can be use in template to represent nested route.
To represent the nested relation we need to to use the `children` option in the `VueRouter` config:

```js
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User,
      children: [
          // UserHome will be rendered inside User's <router-view>
        // when /user/:id is matched
        { path: '', component: UserHome },
        {
          // UserProfile will be rendered inside User's <router-view>
          // when /user/:id/profile is matched
          path: 'profile',
          component: UserProfile
        },
        {
          // UserPosts will be rendered inside User's <router-view>
          // when /user/:id/posts is matched
          path: 'posts',
          component: UserPosts
        }
      ]
    }
  ]
})
```

### Programmatic Navigation

Inside the Vue instance you can access `$router`, you can call different method on on the router instance: push(), replace(), go(). that copy the window.history methods.

```js
router.push('home') // literal string path
router.push({ path: 'home' }) // object
router.push({ name: 'user', params: { userId: 123 }}) // named route

// with query, resulting in /register?plan=private
router.push({ path: 'register', query: { plan: 'private' }})
```

### Named Routes

For more confort Route can get name.

```js
const router = new VueRouter({
  routes: [
    {
      path: '/user/:userId',
      name: 'user',
      component: User
    }
  ]
})
```

### Named Views

`Router-view` can be name to allow the use of multiple tags.

```js
const router = new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Home,
        homeOne: HomeOne,
        homeTwo: HomeTwo,
      }
    }
  ]
})
```

### Redirect and Alias

A redirect means when the user visits `/a`, and URL will be replaced by `/b`, and then matched as `/b`.

```js
const router = new VueRouter({
  routes: [
    { path: '/a', redirect: '/b' }
  ]
})
```

#### Alias

An alias of `/a` as `/b` means when the user visits `/b`, the URL remains `/b`, but it will be matched as if the user is visiting `/a`.

An alias gives you the freedom to map a UI structure to an arbitrary URL, instead of being constrained by the configuration's nesting structure.

```js
const router = new VueRouter({
  routes: [
    { path: '/a', component: A, alias: '/b' }
  ]
})
```

### Passing Props to Route Component

To decoule the `$route` from a specific component use option `props`.

```js
const User = {
  props: ['id'],
  template: '<div>User {{ id }}</div>'
}
const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User, props: true },
    // for routes with named views, you have to define the `props` option for each named view:
    {
      path: '/user/:id',
      components: { default: User, sidebar: Sidebar },
      props: { default: true, sidebar: false }
    }
  ]
})
```

### Navigation Guards

Navigation guards are use to prevent the nasvigation either by redirecting or canceling.

* Globally
* Pre-route
* in-component

** Remember that params or query won't trigger enter/leave navigation guards.

Every guard function receives 3 arguments f(to, from, next){}

#### The Full Navigation Resolution Flow

1. Navigation triggered.
2. Call leave guards in deactivated components.
3. Call global beforeEach guards.
4. Call beforeRouteUpdate guards in reused components.
5. Call beforeEnter in route configs.
6. Resolve async route components.
7. Call beforeRouteEnter in activated components.
8. Call global beforeResolve guards.
9. Navigation confirmed.
10. Call global afterEach hooks.
11. DOM updates triggered.
12. Call callbacks passed to next in beforeRouteEnter guards with instantiated instances.

#### Globally

```js
const router = new VueRouter({ ... })

router.beforeEach((to, from, next) => {
  /* must call `next` */
})

// Will be called right before the navigation is comfirmed,
// after all in-compoment guards ans async route components are resolved.
router.beforeResolve((to, from, next) => {
  /* must call `next` */
})

```

### Data Fetching

Data can be fetch from the server 'Afther Navigation' or 'Before Navigation'.

### Scroll Behavior

Scroll Behavior can allow to scroll to the top of the page when navigating to a new route or preserve the scrolling position of history.

*This features work if the browser supports `history.pushState`*

### Lazy Loading Routes

Lazy Loading allow to load JS bundle only if the route is visible.

```js
const Foo = () => import('./Foo.vue')

const router = new VueRouter({
  routes: [
    { path: '/foo', component: Foo }
  ]
})
```