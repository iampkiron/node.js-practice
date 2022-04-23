const indexController = require("../controller/indexController");

exports.indexRouter = function (app) {
  app.post("/todo", indexController.createTodo); // create
  app.get("/user/:userIdx/todos", indexController.readTodo); // read
  app.patch("/todo", indexController.selectTodo); // updated
};
