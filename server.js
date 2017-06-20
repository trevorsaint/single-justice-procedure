// Module dependencies
const path         = require("path")
const sslRedirect  = require("heroku-ssl-redirect")
const express      = require("express");
const exphbs       = require("express-handlebars")
const session      = require("express-session")
const validator    = require("express-validator")
const cookieParser = require("cookie-parser")
const bodyParser   = require("body-parser")
const router       = express.Router()
const port         = process.env.PORT || 3000
const app          = express()


// Enable SSL redirect
app.use(sslRedirect())


// Serve static assets
app.use("/public", express.static(path.join(__dirname, "/public")))
app.use("/public", express.static(path.join(__dirname, "/node_modules/govuk_template_jinja/assets")))
app.use("/public", express.static(path.join(__dirname, "/node_modules/govuk_frontend_toolkit")))
app.use("/public", express.static(path.join(__dirname, "/node_modules/govuk-elements-sass")))


// Application settings
app.set("view engine", "hbs")
app.set("views", "app/views")


// Handlebars template engine
app.engine("hbs", exphbs({
  defaultLayout: "index",
  layoutsDir: "app/views/layouts/",
  partialsDir: "app/views/partials/",
  extname: ".hbs"
}))


// Body parser
app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))


// Validator
app.use(validator())


// Session
app.use(session({
  secret: "9876543210",
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false // (Recommended as true, but requires an https-enabled url)
  }
}))


// Helpers
const helpers = require("handlebars-helpers")()


// Send assetPath to all views / add variables that area available in all views
app.use((req, res, next) => {
  res.locals.asset_path = "/public/"
  next()
})


// Routing
app.use(require("./app/routes"))
app.use(require("./app/routes/court-administrator"))
app.use(require("./app/routes/prosecutor"))
app.use(require("./app/routes/legal-adviser"))
app.use(require("./app/routes/legal-adviser-pia"))
app.use(require("./app/routes/court-administrator-pia"))
app.use(require("./app/routes/operational-reporting"))
app.use(require("./app/routes/single-justice-procedure-transparency"))


// App listen
app.listen(port)
console.log("App started on port " + port)
