let express = require('express');
const path = require("path")
let app = express();
let port = 3000;

app.use(express.static(path.join(__dirname, "frontend/out")));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at port ${port}`);
});

app.get("/", function(req, res){
  res.sendFile(path.join(__dirname, "frontend/out", index.html))
});

