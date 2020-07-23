module.exports.routes = {
  "/": {
    view: "pages/homepage",
  },

  "POST   /api/create": {
    controller: "BookController",
    action: "addOne",
  },

  "GET    /api/get/all": {
    controller: "BookController",
    action: "getAll",
  },

  "GET    /api/get/:id": {
    controller: "BookController",
    action: "getById",
  },

  "PUT     /api/update/:id": {
    controller: "BookController",
    action: "updateOne",
  },
};
