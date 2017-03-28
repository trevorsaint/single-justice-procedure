/*
 * Module dependencies
 */

var express    = require("express");
var exphbs     = require("express-handlebars");
var session    = require("express-session");
var validator  = require("express-validator");
var bodyParser = require("body-parser");
var router  = express.Router();
var port    = (process.env.PORT || 3000);
var app     = express();

/*
 * Body parser
 */

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(validator());

/*
 * Session
 */

app.use(session({
  secret: "9876543210",
  resave: false,
  saveUninitialized: true
}));

/*
 * Helpers
 */

var helpers = require("handlebars-helpers")();


/*
 * Serve static assets
 */

app.use("/public", express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/models"));
app.use(express.static(__dirname + "/views"));

/*
 * Handlebars template engine
 */

app.engine("hbs", exphbs({
  defaultLayout:"index",
  extname:".hbs"
}));

app.set("view engine", "hbs");

/*
 * Routing
 */

app.use(require("./routes/"));
app.use(require("./routes/court-administrator"));
app.use(require("./routes/prosecutor"));
app.use(require("./routes/legal-adviser"));
app.use(require("./routes/legal-adviser-pia"));
app.use(require("./routes/court-administrator-pia"));
app.use(require("./routes/single-justice-procedure-transparency"));

/*
 * App listen
 */

app.listen(port);
console.log("App started on port " + port);
