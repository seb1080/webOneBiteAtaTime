

# Web Application Architecture





## Stateless web architecture vs. Statful web architecture

- Stateless: dependent only on the input parameters that are supplied.

- Stateful: relies on the `session state` of some kind stored in a particular werver to process the request.

To avoid statefull nature cookies need to be use on the client side.


...SPA, 

...PWA  


...RESTful API


# ProgressiveWorkOut Case Study

Front-end     HTTPS request       Back-end                 Database
PWA
Vue.js                          Cloud Functions        Firebase RealTime Database
Vue-router
Vuex                            Firebase Auth




## Front end Architecture

Example base on the progressiveWorkOut

- root: 

- Page: The page comp. are

root                                      App.vue
                                            |
pages   
LoginPage.vue HomePage.vue ExercisePage.vue MetricPage.vue SettingsPage.vue ProfilePage.vue   



