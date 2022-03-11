import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Vote from "../Vote";

import { getArticleById } from "../../Api";

export default function FullArticle() {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id)
      .then((res) => {
        setArticle(res);
        setIsLoading(false);
      })
      .catch((error) => {
        setErr(error);
      });
  }, [article_id]);

  if (err) {
    return <p>{err.response.data.msg}</p>;
  } else if (isLoading) {
    return <p>Loading</p>;
  }
  return (
    <div className="articleFull">
      <p className="articleFullTitle">{article.title}</p>
      <p>{article.body}</p>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{article.votes}</p>
      <p>{article.created_at}</p>
      <p>{article.comment_count}</p>
      <Vote article_id={article_id} votes={article.votes} />
    </div>
  );
}
