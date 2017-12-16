
//Bringing in necessary dependencies.
var express = require('express')
var PORT = process.env.PORT || 3001;
var bodyParser = require('body-parser');
var index = require('./routes/index');
var users = require('./routes/users');

app = express();

//Middleware declaration for body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//Allows us to use local styling from our public/assets folder.
app.use(express.static('public'));

app.use('/', index);
app.use('/users', users);

//Syncing with the database prior to listening on port 3001
app.listen(process.env.PORT || 3001, function() {
  console.log("App listening on PORT " + PORT);
});