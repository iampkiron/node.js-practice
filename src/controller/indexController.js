const indexDao = require("../dao/indexDao");

exports.createTodo = async function (req, res) {
  const { userIdx, contents, type } = req.body;

  if (!userIdx || !contents || !type) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "입력값이 누락되었습니다.",
    });
  }

  if (contents.length > 20) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "글자수 20자를 초과했습니다.",
    });
  }
  const vaildTypes = ["do", "delegate", "decide", "delete"];
  if (!vaildTypes.includes(type)) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "타입값이 누락되었습니다.",
    });
  }

  const insertTodoRow = await indexDao.insertTodo(userIdx, contents, type);
};

exports.readTodo = async function (req, res) {
  const { userIdx } = req.params;
  let todos = {};
  const types = ["do", "delegate", "decide", "delete"];

  for (type of types) {
    let selectTodoByTypeRows = await indexDao.selectTodoByType(userIdx, type);

    if (!selectTodoByTypeRows) {
      return res.send({
        isSuccess: false,
        code: 400,
        message: "잘못된 쿼리입니다.",
      });
    }

    todos[type] = selectTodoByTypeRows;
  }

  return res.send({
    result: todos,
    isSuccess: false,
    code: 400,
    message: "쿼리 전송 성공",
  });
};

exports.selectTodo = async function (req, res) {
  let { userIdx, todoIdx, contents, status } = req.body;

  if (!userIdx || !todoIdx) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "잘못된 userIdx, todoIdx 데이터입니다.",
    });
  }

  if (!contents) {
    contents = null;
  }

  if (!status) {
    status = null;
  }

  const isVaildTodo = await indexDao.isVaildTodo(userIdx, todoIdx);

  if (isVaildTodo.length < 1) {
    return res.send({
      isSuccess: false,
      code: 400,
      message: "유효하지 않은 userIdx 또는 todoIdx입니다.",
    });
  }

  const updateTodo = await indexDao.updateTodo(
    userIdx,
    todoIdx,
    contents,
    status
  );

  return res.send({
    isSuccess: true,
    code: 200,
    message: "쿼리 수정 성공",
  });
};
