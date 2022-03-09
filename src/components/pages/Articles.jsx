import { useEffect, useState } from "react";
import { getAllArticles } from "../../Api";
import ArticleCard from "../ArticleCard";

export default function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles().then((res) => {
      setArticles(res);
    });
  }, []);

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
