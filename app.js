/*
 * Module dependencies
 */

var express    = require('express');
var exphbs     = require('express-handlebars');
var session    = require('express-session');
var bodyParser = require('body-parser');
var router  = express.Router();
var port    = (process.env.PORT || 3000);
var app     = express();

/*
 * Baseurl and Apptitle
 */

var baseurl  = '/';
var apptitle = 'Single Justice Procedure';

/*
 * Body parser
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/*
 * Session
 */

app.use(session({
  secret: '9876543210',
  resave: false,
  saveUninitialized: true
}));

/*
 * Helpers
 */

var helpers    = require('handlebars-helpers')();
//var comparison = helpers.comparison();
//var string     = helpers.string();


/*
 * Serve static assets
 */

app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/models'));
app.use(express.static(__dirname + '/views'));

/*
 * Handlebars template engine
 */

app.engine('hbs', exphbs({
  defaultLayout:'index',
  extname:'.hbs'
}));

app.set('view engine', 'hbs');

/*
 * Routing
 */

app.use(require('./routes/'));
app.use(require('./routes/court-administrator'));
app.use(require('./routes/prosecutor'));
app.use(require('./routes/legal-adviser'));
app.use(require('./routes/legal-adviser-proof-in-absence'));
app.use(require('./routes/court-administrator-proof-in-absence'));
app.use(require('./routes/single-justice-procedure-transparency'));

/*
 * App listen
 */

app.listen(port);
console.log('App started on port ' + port);
