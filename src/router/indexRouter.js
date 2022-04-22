const indexController = require("../controller/indexController");

exports.indexRouter = function (app) {
  app.get("/users", indexController.getUsers);
  app.get("/", indexController.dummy);
};
