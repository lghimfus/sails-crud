var supertest = require("supertest");
const chai = require("chai");

describe("BookController.addOne", () => {
  describe("#addOne()", function () {
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
        .expect(201)
        .end(function (err, res) {
          if (err) {
            throw err;
          }
          done();
        });
    });
  });
});

describe("BookController.getAll", () => {
  describe("#getAll()", function () {
    it("should get all the books", function (done) {
      supertest(sails.hooks.http.app)
        .get("/api/get/all")
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

// Din pacate, nu am suficient timp sa rezolv testele de mai jos
// fiind integration tests, ar trebui lucrat cu valori reale
// adauga entry -> ruleaza test -> drop entry

// describe("BookController.getById", () => {
//   describe("#getById()", function () {
//     it("should get one book by id", function (done) {
//       supertest(sails.hooks.http.app)
//         .get("/api/get/:id")
//         .set("Accept", "application/json")
//         .expect(200)
//         .end(function (err, res) {
//           if (err) {
//             throw err;
//           }
//           done();
//         });
//     });
//   });
// });

// describe("BookController.updateOne", () => {
//   describe("#updateOne()", function () {
//     it("should update book data", function (done) {
//       supertest(sails.hooks.http.app)
//         .put("/api/update/:id")
//         .send(
//           JSON.stringify({
//             title: "The hitchhiker's guide",
//             author: "Douglas Adams",
//             year: 2010,
//             description:
//               "This is just a description of hitchhiker's guide to the galaxy by Douglas Adams",
//           })
//         )
//         .set("Content-Type", "application/json")
//         .expect(200)
//         .end(function (err, res) {
//           if (err) {
//             throw err;
//           }
//           done();
//         });
//     });
//   });
// });

// describe("BookController.deleteOne", () => {
//   describe("#deleteOne()", function () {
//     it("should delete one book", function (done) {
//       supertest(sails.hooks.http.app)
//         .post("/api/delete/:id")
//         .expect(200)
//         .expect(done);

//       done();
//     });
//   });
// });
