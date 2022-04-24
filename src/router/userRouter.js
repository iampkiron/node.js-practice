const { jwtMiddleware } = require("../../jwtmiddleware");
const userController = require("../controller/userController");

exports.userRouter = function (app) {
  app.post("/user", userController.signup); // 회원가입
  app.get("/log-in", userController.signin); // 로그인
};
