let express = require('express');
let app = express();
let port = 3000;

app.use(express.static('views'));

app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at port ${port}`);
});

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/main.html")
});

