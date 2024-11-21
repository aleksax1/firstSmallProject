import React from "react";
import "../../App.scss";

function NewsCard({ article }) {  

  if (
    article.title === '[REMOVED]'
  ) {
    return null;
  }
  return (  
    <>
      <div className="article">
        <img
          src={article.urlToImage || "https://cdn.pixabay.com/photo/2022/11/05/09/29/breaking-news-7569437_640.jpg"}
          alt="Article"
          onError={(e) => {
            e.target.onerror = null; 
            e.target.src = "https://cdn.pixabay.com/photo/2022/11/04/09/29/breaking-news-7569437_640.jpg" ; 
          }}
        />

        <div className="news-text">
        <h2>{article.title}</h2>
        <p>{article.description}</p>
       <div className="more"> <a href={article.url} target="_blank" rel="">
          Procitaj vise...
        </a>
        <h5>{article.author}</h5>
        </div>
        </div>
      </div>
    </>
  );
}

export default NewsCard;
