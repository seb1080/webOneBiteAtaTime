# LEARN MONGO


```js
db.getCollection('projects').aggregate([
{ $match: { "boroughId": "AC" }  }
])
```

## Aggreagation by BoroughId

```js
db.getCollection('projects').aggregate([
    { $group : { _id : "$boroughId", count:{ $sum : 1 }}}
])
```

