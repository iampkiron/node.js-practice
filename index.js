const cors = require("cors");
const compression = require("compression");
const { indexRouter } = require("./src/router/indexRouter");
const express = require("express");
const app = express();
const port = 3000;

// 미들웨어 설정
app.use(cors());
// json파싱
app.use(express.json());
// http 요청 압축
app.use(compression());
// 라우터 분리
indexRouter(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
