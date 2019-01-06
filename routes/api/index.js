const router = require("express").Router();
const articlesRoutes = require("./articles");

//// Add new routes here //////
router.use("/articles", articlesRoutes);

module.exports = router;
