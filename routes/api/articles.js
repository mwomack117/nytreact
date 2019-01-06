const router = require("express").Router();
const articleController = require("../../controllers/articleController");

// Matches with "/api/articles/:id"
// router
//   .route("/:id")
//   .get(articlesController.findById)
//   .put(booksController.update)
//   .delete(articlesController.remove);

router.route("/saveArticle").post(articleController.save);
router.route("/getSavedArticles").get(articleController.getSavedArticles);
router
  .route("/deleteSavedArticle")
  .delete(articleController.deleteSavedArticle);

module.exports = router;
