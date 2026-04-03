import React, { useState } from "react";
import "./styles/style.css"
import Header from "./components/header/Header"; 
import NewsList from "./components/NewsList";
import { newsData } from "./utils/data";


export default function App() {
  const [news, setNews] = useState(newsData);

  const getKeywords = (event) => {
    const keywords = event.target.value.toLowerCase();

    const filtered = newsData.filter((item) =>
      item.title.toLowerCase().includes(keywords)
    );

    setNews(filtered);
  };

  return (
    <>
      <Header getKeywords={getKeywords} />
      <NewsList news={news} />
    </>
  );
}