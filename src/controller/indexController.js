const indexDao = require("../dao/indexDao");

exports.dummy = function (req, res) {
  return res.send("it works");
};

exports.getUsers = async function (req, res) {
  const [userRows] = await indexDao.getUserRows();
  return res.send(userRows);
};
