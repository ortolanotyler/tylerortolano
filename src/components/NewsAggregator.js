// src/components/NewsAggregator.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './NewsAggregator.module.css';

const NewsAggregator = () => {
  const [news, setNews] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const response = await axios.get(
        'https://gnews.io/api/v4/top-headlines?&token=daf7a78092354826da6ff78a32a4c4d1&lang=en&country=us&max=5'
      );
      setNews(response.data.articles || []);
    } catch (err) {
      setError('Error fetching news data.');
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest News</h2>
      {error && <p className={styles.error}>{error}</p>}
      <ul className={styles.newsList}>
        {news.map((article, index) => (
          <li key={index} className={styles.newsItem}>
            <a href={article.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
              {article.title}
            </a>
            <p className={styles.source}>{article.source.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsAggregator;

