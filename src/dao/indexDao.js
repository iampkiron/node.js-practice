const { pool } = require("../../database");

exports.getUserRows = async function () {
  try {
    const connection = await pool.getConnection(async (conn) => conn);

    try {
      const selectUserQuery = "SELECT * FROM Users;";
      const [row] = await connection.query(selectUserQuery);
      return row;
    } catch (err) {
      console.log(`#####getUserRows Query error#####`);
      return false;
    } finally {
      connection.release();
    }
  } catch (err) {
    console.error(`#####getUserRows DB error#####`);
    return false;
  }
};
