// Module dependencies
const sslRedirect = require('heroku-ssl-redirect');
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const validator = require('express-validator');
const bodyParser = require('body-parser');
const router = express.Router();
const port = (process.env.PORT || 3000);
const app = express();


// Enable SSL redirect
app.use(sslRedirect());


// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));


// Validator
app.use(validator());


// Session
app.use(session({
  secret: '9876543210',
  resave: false,
  saveUninitialized: true
}));


// Send assetPath to all views / add variables that area available in all views
app.use((req, res, next) => {
  res.locals.asset_path = '/public/'
  next()
})


// Helpers
const helpers = require('handlebars-helpers')();


// Serve static assets
app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(path.join(__dirname, '/node_modules/govuk_template_jinja/assets')))
app.use('/public', express.static(path.join(__dirname, '/node_modules/govuk_frontend_toolkit')))
app.use('/public', express.static(path.join(__dirname, '/node_modules/govuk-elements-sass')))


app.use(express.static(__dirname + 'app/models'));


// Handlebars template engine
app.engine('hbs', exphbs({
  defaultLayout: 'index',
  extname: '.hbs',
  layoutsDir: 'app/views/layouts',
  partialsDir: 'app/views/partials'
}));


app.set('views', 'app/views');
app.set('view engine', 'hbs');


// Routing
app.use(require('./app/routes/'));
app.use(require('./app/routes/court-administrator'));
app.use(require('./app/routes/prosecutor'));
app.use(require('./app/routes/legal-adviser'));
app.use(require('./app/routes/legal-adviser-pia'));
app.use(require('./app/routes/court-administrator-pia'));
app.use(require('./app/routes/operational-reporting'));


// App listen
app.listen(port);
console.log('App started on port ' + port);
