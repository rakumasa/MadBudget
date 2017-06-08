var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8000;


var spendingCtrl = require('./spendingCtrl');

var app = express();

app.use(express.static('www'));

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false }));



app.get('/spendings', spendingCtrl.getAll)
app.get('/spendings/:id', spendingCtrl.getOne)
app.post('/spendings', spendingCtrl.addOne)
app.put('/spendings/:id', spendingCtrl.changeOne)
app.delete('/spendings/:id', spendingCtrl.deleteOne)


// app.get('/spendings/sum', spendingCtrl.getSum)


app.listen(port, function() {
  console.log("listening on: ", port)
})
