const app = require("../");
const request = require("supertest").agent(app.listen());

describe("Our amazinz site", () => {
  describe("has a nice welcoming message", () => {
    context("when ...", () => {
      it("should ...", done => {
        // arrange
        // act
        request
          .get("/")
          .expect("koa say Hi")
          .end(done);
        // assert
      });
    });
  });
});
