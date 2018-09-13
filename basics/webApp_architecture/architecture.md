

# Web Application Architecture





## Stateless web architecture vs. Statful web architecture

- Stateless: dependent only on the input parameters that are supplied.

- Stateful: relies on the `session state` of some kind stored in a particular werver to process the request.

To avoid statefull nature cookies need to be use on the client side.


# ProgressiveWorkOut Case Study

Front-end   HTTPS request       Back-end                 Database
PWA                          Cloud Functions        Firebase RealTime Database
Vue.js                          




## Front end Architecture

Example base on the progressiveWorkOut



root                                      App.vue
                                            |
pages   
LoginPage.vue HomePage.vue ExercisePage.vue MetricPage.vue SettingsPage.vue ProfilePage.vue   



