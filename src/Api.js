const axios = require("axios").default;

const ncApi = axios.create({
  baseURL: "https://nc-news-example-seminar-3-14.herokuapp.com/api",
});

exports.getAllArticles = () => {
  return ncApi.get("/articles").then((response) => {
    return response.data.articles;
  });
};
