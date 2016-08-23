/*
 * Module dependencies
 */

var express = require('express');
var exphbs  = require('express-handlebars');
var app     = express();
var routes  = require(__dirname + '/routes');
var port    = (process.env.PORT || 3000);


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
 * App listen
 */

app.listen(port);
console.log('Listening on port ' + port);