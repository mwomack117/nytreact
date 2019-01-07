import axios from "axios";
const BASEURL =
  "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=";
const APIKEY = "206cc5717a634c7bb05b82892ca6af74&q=";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + query);
  },
  saveArticle: function(articleObject) {
    return axios.post("/saveArticle", articleObject);
  },
  getSavedArticles: function() {
    return axios.get("/getSavedArticles");
  },
  deleteSavedArticle: function(id) {
    return axios.delete("/deleteSavedArticle", { data: { articleId: id } });
  }
};
