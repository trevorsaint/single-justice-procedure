// Module dependencies
const sslRedirect = require("heroku-ssl-redirect");
const express     = require("express");
const exphbs      = require("express-handlebars");
const session     = require("express-session");
const validator   = require("express-validator");
const bodyParser  = require("body-parser");
const router      = express.Router();
const port        = (process.env.PORT || 3000);
const app         = express();


// Enable SSL redirect
app.use(sslRedirect());


// Body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Validator
app.use(validator());


// Session
app.use(session({
  secret: "9876543210",
  resave: false,
  saveUninitialized: true
}));


// Helpers
const helpers = require("handlebars-helpers")();


// Serve static assets
app.use("/public", express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/models"));
app.use(express.static(__dirname + "/views"));


// Handlebars template engine
app.engine("hbs", exphbs({
  defaultLayout:"index",
  extname:".hbs"
}));

app.set("view engine", "hbs");


// Routing
app.use(require("./routes/"));
app.use(require("./routes/court-administrator"));
app.use(require("./routes/prosecutor"));
app.use(require("./routes/legal-adviser"));
app.use(require("./routes/legal-adviser-pia"));
app.use(require("./routes/court-administrator-pia"));
app.use(require("./routes/operational-reporting"));


// App listen
app.listen(port);
console.log("App started on port " + port);
