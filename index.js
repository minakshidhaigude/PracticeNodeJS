/* Demo1
let http = require("http");
let server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/plain",
  });
  res.write("<h1>HELLO</h1>");
  res.end(); // res continuely loading
});
server.listen(8888);
*/
let express = require("express");
let router = require("./routes");
let app = express();

// use middleware -- separate the json from request and
app.use(express.json());
//use routes object
app.use("/", router);

app.get("/", (req, res) => {
  //res.send("<h1>Welcome to Home page</h1>");
  console.log(__dirname);
  res.sendFile(__dirname + "/views/index.html");
});
app.get("/about", (req, res) => {
  res.send("<h1>About page</h1>");
});
app.listen(5000, () => {
  //express will automatically createServer and start listening on  given port behind the scene it execute http service
  console.log("Server is running on port 5000");
});
