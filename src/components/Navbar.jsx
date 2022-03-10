import { Link } from "react-router-dom";
import { getTopics } from "../Api";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((res) => {
      setTopics(res);
    });
  }, []);

  return (
    <nav>
      <Link className="navbarLink" to={"/articles"}>
        articles
      </Link>
      {topics.map((topic) => {
        return (
          <Link
            className="navbarLink"
            to={`/topics/${topic.slug}`}
            key={topic.slug}
          >
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
}
