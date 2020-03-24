const express = require("express");
const router = express.Router();
// const cloudinary = require("cloudinary");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { asyncErrorHandler } = require("../middleware");
const {
  postIndex,
  postNew,
  postCreate,
  postShow,
  postEdit,
  postUpdate,
  postDestroy
} = require("../controllers/posts");

/* get posts index /posts  */
router.get("/", asyncErrorHandler(postIndex));

/* get posts new /posts/new  */
router.get("/new", postNew);

/* post posts create /posts/ */
router.post("/", upload.array("images", 4), asyncErrorHandler(postCreate));

/* get posts show /posts/:id  */
router.get("/:id", asyncErrorHandler(postShow));

/* get posts edit /posts/:id/edit  */
router.get("/:id/edit", asyncErrorHandler(postEdit));

/* put posts update /posts/:id  */
router.put("/:id", upload.array("images"), asyncErrorHandler(postUpdate));

/* delete posts destroy /posts/:id  */
router.delete("/:id", asyncErrorHandler(postDestroy));

module.exports = router;
