let user = require("express").Router();
let mysql = require("mysql2");
let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "node_express_training",
});
con.connect((err) => {
  err ? console.log(err) : console.log("Connection Successful");
});
// user.get("/addnew", (req, res) => {
//   res.send("This is add new user method");
// });
user.post("/add", (req, res) => {
  console.log(req.body);
  let udata = req.body;
  con.query(
    `INSERT INTO users(name,email,phone) VALUES('${udata.name}','${udata.email}','${udata.phone}')`,
    (err, rows, fields) => {
      if (err) {
        res.send("some error | contact developer");
        //res.status(500).json({ error: JSON.stringify(err) });
      } else {
        res.send("User added successfully");
        //res.status(201).json({ sucess: "created successfully" });
      }
    }
  );
  res.send("This is users/add request");
});

user.get("/all", (req, res) => {
  con.query("select * from users", (err, rows, fields) => {
    if (err) {
      res.send("some error | contact developer");
    } else {
      res.send(rows);
    }
  });
});

user.delete("/delete/:uid", (req, res) => {
  let id = req.params.uid;
  con.query(`DELETE FROM users WHERE id = ${id}`, (err, rows, fields) => {
    if (err) {
      res.send("some error | contact developer");
    } else {
      res.send("Deleted successfully");
    }
  });
});

user.put("/update", (req, res) => {
  let udata = req.body;
  con.query(
    `UPDATE users SET name='${udata.name}, email='${udata.email} ,phone='${udata.phone} WHERE id=${udata.id}`,
    (err, rows, fields) => {
      if (err) {
        res.send("some error | contact developer");
      } else {
        res.send("Updated successfully");
      }
    }
  );
});
module.exports = user;
