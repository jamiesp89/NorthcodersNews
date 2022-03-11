import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getArticleById } from "../../Api";

export default function FullArticle() {
  const [article, setArticle] = useState([]);

  const { article_id } = useParams();

  useEffect(() => {
    getArticleById(article_id).then((res) => {
      setArticle(res);
    });
  }, [article_id]);

  return (
    <div className="articleFull">
      <p className="articleFullTitle">{article.title}</p>
      <p>{article.body}</p>
      <p>{article.topic}</p>
      <p>{article.author}</p>
      <p>{article.votes}</p>
      <p>{article.created_at}</p>
      <p>{article.comment_count}</p>
    </div>
  );
}
