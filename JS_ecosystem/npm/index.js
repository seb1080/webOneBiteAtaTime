const Koa = require("koa");
const app = (module.exports = new Koa());

const PORT = 4000;

app.use(ctx => {
  ctx.body = "koa say Hi";
});

app.listen(PORT);
console.log(`App started`);
