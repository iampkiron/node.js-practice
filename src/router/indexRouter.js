const { jwtMiddleware } = require("../../jwtmiddleware");
const indexController = require("../controller/indexController");

exports.indexRouter = function (app) {
  app.post("/todo", jwtMiddleware, indexController.createTodo); // create
  app.get("/user/:userIdx/todos", indexController.readTodo); // read
  app.patch("/todo", indexController.selectTodo); // updated
  app.delete("/user/:userIdx/todo/:todoIdx", indexController.deleteTodo); // delete
};
