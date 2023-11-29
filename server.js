const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// rest API 구축

//======= database 설정
const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database
});
connection.connect();

//===============

// DB에서 가져온 데이터를 localhost:5000(package.json에서 설정한 proxy)/api/customers에 등록
app.get('/api/customers', (req, res) => {
  connection.query(
    "SELECT * FROM customer",
    (err, rows, fields) => {
      res.send(rows);
    }
  )
})

app.listen(port, () => console.log(`Listening on port ${port}`));