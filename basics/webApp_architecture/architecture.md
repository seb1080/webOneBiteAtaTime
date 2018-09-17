

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




# RESTful API

In 2000, Roy Fielding, proposed an architectural approach for web-services know as
**Representational State Transfer (REST)**. REST is not tied to HTTP. These API's provide way to identify a resource by its URI, which can be used to transfer a representation or a resource's current state over HTTP.

REST API should be language agnostic. 

[HATEOAS](https://en.wikipedia.org/wiki/HATEOAS) or the Hypermedia As The Engine Of Application State is the important feature of every scalable and flexible REST API.

## ROY Fielding 6 constraints

- Uniform Interface: The client and the server should by decouble and evolve independently.

- Stateless: The server should not save any states between different requests. The state of the session is exclusively left to the responsibility of the client. **All REST interactions are stateless. That is, each request contains all of the information necessary for a connector to understand the request, independent of any requests that may have preceded it.**

- Cacheable: The Client should be able to store responses in a cache forthe greater performance.

- Client-server architecture: Client in the web browser and the Server on the back-end.

- Layered System: The client can't tell wheter it is connected directly to the end server, or to an intermediary. INtermediary servers can improve system scalability by enabling load-balancing and by providing shared caches. layers may also enforce security policies.

- Code on Demand (optional): Server are able to temporarily extend client fonctionnality by transfering logic.Could be passing JS components.


# API Design

- Resources: A resource is an object that's is referenced by it self. 

- Collection: A collection is a group of resource.

- HTTP method: HTTP verbs (POST/GET/PUT/DELETE/PATCH)


Treat the resource like a noun and HTTP methods as verbs.



[Learn REST](https://www.restapitutorial.com/)

[API Design by Microsoft](https://docs.microsoft.com/en-us/azure/architecture/best-practices/api-design)

[API best practices](https://code-maze.com/top-rest-api-best-practices/)