var express = require ('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
  id:'1',
  descripton:'Meet mom for lunch',
  completed: false
}, {
  id:'2',
  descripton:'Go to market',
  completed: false
}, {
  id:'3',
  descripton:'Go to movie',
  completed: true
}];

app.get ('/',function (req,res) {
  res.send ('TODO API Root');
});

// GET /todos
app.get('/todos',function (req,res) {
  res.json(todos);
});

// GET /todos/id

app.listen(PORT, function () {
  console.log('Express listening on port: ' + PORT + '!');
});
