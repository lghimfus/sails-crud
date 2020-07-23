var supertest = require("supertest");
const chai = require("chai");

// Create a new book
describe("BookController.createBook", () => {
  describe("#create()", function () {
    it("should create a new book", function (done) {
      supertest(sails.hooks.http.app)
        .post("/api/create")
        .send(
          JSON.stringify({
            title: "The hitchhiker's guide",
            author: "Douglas Adams",
            year: 2010,
            description:
              "This is just a description of hitchhiker's guide to the galaxy by Douglas Adams",
          })
        )
        .set("Content-Type", "application/json")
        .set("Accept", "application/json")
        .expect(200)
        .end(function (err, res) {
          if (err) {
            throw err;
          }
          done();
        });
    });
  });
});
