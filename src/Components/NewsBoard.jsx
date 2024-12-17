import { useEffect, useState } from "react";
import Newsitem from "./Newsitem";

const NewsBoard = ({ category }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, [category]);

  return (
    <div className="news-board">
      <h2 className="text-center my-4">
        Latest <span className="badge bg-danger text-light">News</span>
      </h2>
      <div className="row g-4">
        {articles.length > 0 ? (
          articles.map((news, index) => (
            <div className="col-md-3" key={index}>
              <Newsitem
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
              />
            </div>
          ))
        ) : (
          <p className="text-center">Loading news...</p>
        )}
      </div>
    </div>
  );
};

export default NewsBoard;
