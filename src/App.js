import "./App.css";
import Home from "./components/pages/Home";
import NavBar from "./components/Navbar";
import Articles from "./components/pages/Articles";
import FullArticle from "./components/pages/ArticleInFull";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:article_id" element={<FullArticle />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
