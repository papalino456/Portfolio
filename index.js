let express = require('express');
var bodyParser = require('body-parser');
const path = require("path")

let app = express();
let port = 3000;
var data;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend/out")));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at port ${port}`);

});

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "frontend/wip.html"))
});

app.post("/button", function(req,res){
  data = req.body;
  console.log(data);
});

app.get("/button", function(req,res){
  res.send(data);
});

app.get("/page", function(req, res){
  res.send
});