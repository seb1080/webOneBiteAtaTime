# Web Application Architecture


## Stateless web architecture vs. Stateful web architecture

- Stateless: dependent only on the input parameters that are supplied.

- Stateful: relies on the `session state` of some kind stored in a particular server to process the request.

To avoid stateful nature cookies need to be use on the client side.


...SPA,

...PWA


...RESTful API


# Progressive WorkOut Case Study

Front-end     HTTPS request       Back-end                 Database
PWA
Vue.js                          Cloud Functions        Firebase RealTime Database
Vue-router
Vuex                            Firebase Auth

[Hot to structure Vue project](https://itnext.io/how-to-structure-a-vue-js-project-29e4ddc1aeeb)


## Front end Architecture

Example base on the progressiveWorkOut

- main: Set the Vue app.

- root: Can contain the element that repeat on every page, Ex: toolbar, content frame and     router-view

- Pages: Containt the structure of the page

- Smart components that containt logic Ex: TheLoginForm

- Base components: Dumb or Pure comp. that only recieve props and render to the page.

- Functional Components: Comp. is render has a template with props. Func. comp. are not reactive.


# root
  App.vue
                v-toolbar
                v-content
                  router-view
# pages
  LoginPage.vue
                TheLoginForm

  HomePage.vue


  ExercisePage.vue
                ExerciseCreation
                ExerciseList

  MetricPage.vue


  SettingsPage.vue


  ProfilePage.vue


# Reference


[Planing Front End App](https://developer.telerik.com/featured/planning-front-end-javascript-application/)
[Offline-first](https://developer.chrome.com/apps/offline_apps)
[Field Guide to Web App](http://www.html5rocks.com/webappfieldguide/toc/index/)

# Semantic Versioning

Consider a version format of X.Y.Z (Major.Minor.Patch) increment the:

1. MAJOR version when you make incompatible API changes,
2. MINOR version when you add functionality in a backwards-compatible manner
3. PATCH version when you make backwards-compatible bug fixes.

Additional labels for pre-release and build metadata are available as extensions to the MAJOR.MINOR.PATCH format.

[Semantic Versioning](file:///C:/Users/sebas/Desktop/Semantic%20Versioning%202.0.0%20_%20Semantic%20Versioning.mhtml)

