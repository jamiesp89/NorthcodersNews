import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticles } from "../../Api";
import ArticleCard from "../ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  const { topic } = useParams();

  useEffect(() => {
    getArticles(topic).then((res) => {
      setArticles(res);
    });
  }, [topic]);

  return (
    <div>
      <h1>Articles</h1>
      <div className="articles">
        {articles.map((article) => {
          return <ArticleCard key={article.article_id} article={article} />;
        })}
      </div>
    </div>
  );
}
