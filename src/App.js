import "./App.css";
import Home from "./components/pages/Home";
import HomeLink from "./components/HomeLink";
import Articles from "./components/pages/Articles";
import FullArticle from "./components/pages/ArticleInFull";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <HomeLink />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<FullArticle />} />
        <Route path="/topics/:topic" element={<Articles />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
