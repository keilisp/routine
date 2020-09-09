require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const engine = require("ejs-mate");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const passport = require("passport");
const passportLocalMongoose = require("passport-local-mongoose");
const session = require("express-session");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

// require models
const User = require("./models/user");

// require routres
const indexRouter = require("./routes/index");
const postsRouter = require("./routes/posts");
const reviewsRouter = require("./routes/reviews");

const app = express();

// connect to mongodb
mongoose.connect("mongodb://localhost:27017/periphery-shop-mapbox", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.engine("ejs", engine);
// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(methodOverride("_method"));

app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// configure passport and sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(passport.initialize());
app.use(passport.session());

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// set local vars middleware
app.use(function (req, res, next) {
  //set page title
  res.locals.title = "Periphery-shop";
  //set success flash message
  res.locals.success = req.session.success || "";
  delete req.session.success;
  //set error flash message
  res.locals.error = req.session.error || "";
  delete req.session.error;
  //continue on to next function in middleware chain
  next();
});

// mount routes
app.use("/", indexRouter);
app.use("/posts", postsRouter);
app.use("/posts/:id/reviews", reviewsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  // res.locals.message = err.message;
  // res.locals.error = req.app.get("env") === "development" ? err : {};

  // // render the error page
  // res.status(err.status || 500);
  // res.render("error");
  console.log(err);
  req.session.error = err.message;
  res.redirect("back");
});

module.exports = app;
