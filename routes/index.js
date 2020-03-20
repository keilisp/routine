const express = require("express");
const router = express.Router();
const { postRegister, postLogin, getLogout } = require("../controllers");
const { asyncErrorHandler } = require("../middleware");

// get home page /
router.get("/", (req, res, next) => {
  res.render("index", {
    title: "Surf Shop - Home"
  });
});

/* get /register  */
router.get("/register", (req, res, next) => {
  res.send("GET /register");
});

/* post /register  */
router.post("/register", asyncErrorHandler(postRegister));

/* get /login */
router.get("/login", (req, res, next) => {
  res.send("GET /login");
});

/* post /login  */
router.post("/login", postLogin);

/* get /logout */
router.get("/logout", getLogout);

/* get /profile  */
router.get("/profile", (req, res, next) => {
  res.send("GET /profile");
});

/* put /profile  */
router.put("/profile/:user_id", (req, res, next) => {
  res.send("PUT /profile/:user_id");
});

/* get /forgot  */
router.get("/forgot", (req, res, next) => {
  res.send("GET /forgot");
});

/* put /forgot  */
router.put("/forgot", (req, res, next) => {
  res.send("PUT /forgot");
});

/* get /reset/:token  */
router.get("/reset/:token", (req, res, next) => {
  res.send("GET /reset/:token");
});

/* put /reset/:token  */
router.put("/reset/:token", (req, res, next) => {
  res.send("PUT /reset/:token");
});
module.exports = router;
