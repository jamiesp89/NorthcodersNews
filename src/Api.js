const axios = require("axios").default;

const ncApi = axios.create({
  baseURL: "https://nc-news-example-seminar-3-14.herokuapp.com/api",
});

exports.getArticles = (topic) => {
  if (!topic) {
    return ncApi.get("/articles").then((response) => {
      return response.data.articles;
    });
  } else {
    return ncApi.get(`/articles?topic=${topic}`).then((response) => {
      return response.data.articles;
    });
  }
};

exports.getTopics = () => {
  return ncApi.get("/topics").then((response) => {
    return response.data.topics;
  });
};

exports.getArticleById = (article_id) => {
  return ncApi.get(`/articles/${article_id}`).then((response) => {
    return response.data.article;
  });
};

exports.patchVotes = (article_id, vote) => {
  return ncApi
    .patch(`/articles/${article_id}`, { inc_votes: vote })
    .then((response) => {
      return response;
    });
};
