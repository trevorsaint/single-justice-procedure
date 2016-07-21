/*
 * Module dependencies
 */

var express    = require('express');
var exphbs     = require('express-handlebars');
var app        = express();
var routes     = require(__dirname + '/routes');


/*
 * Serve static assets
 */
  
app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/models'));
app.use(express.static(__dirname + '/views'));


/*
 * Body parser
 */

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/*
 * Jade template engine
 */

app.engine('hbs', exphbs({extname:'hbs', defaultLayout:'index.hbs'}));
app.set('view engine', 'hbs');


/*
 * Routing
 */

routes.bind(app, '/routes/');


/*
 * Catch 404 errors
 */

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});


/*
 * App listen
 */

app.listen(3000, function() {
  console.log('Listening on port 3000...');
});