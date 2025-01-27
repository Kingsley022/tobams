"use client";
import React, { useState, useEffect } from 'react';
import { Article } from './TrendingArticles';
import ArticleCard from './ArticleCard';
import { Skeleton, SkeletonText } from '@chakra-ui/react';

interface Props {
  articles: Article[];
  no_articles?: number;
}

const Articles = ({ articles, no_articles = 6 }: Props) => {
  const [numberOfArticles, setNumberOfArticles] = useState(no_articles);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (articles.length > 0) {
      setLoading(false);
    }
  }, [articles]);

  const handleLoadMore = () => {
    if (numberOfArticles < articles.length) {
      setNumberOfArticles((prev) => Math.min(prev + no_articles, articles.length));
    }
  };

  const handleShowLess = () => {
    setNumberOfArticles(6);
  };

  return (
    <>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-6">
        {loading ? (
          // Display skeletons while loading
          Array.from({ length: numberOfArticles }).map((_, index) => (
            <div key={index} className="w-full">
              <Skeleton height="200px" mb="4" />
              <SkeletonText noOfLines={3} spacing="4" />
            </div>
          ))
        ) : (
          // Display articles once loaded
          articles.slice(0, numberOfArticles).map((article: Article) => (
            <ArticleCard article={article} key={article.id} />
          ))
        )}
      </div>

      <div className="flex justify-center">
        {numberOfArticles < articles.length ? (
          <button
            onClick={handleLoadMore}
            className="text-hue border-hue border-[1.5px] px-4 py-2 rounded-lg mt-12"
          >
            Load More
          </button>
        ) : (
          <button
            onClick={handleShowLess}
            className="text-hue border-hue border-[1.5px] px-4 py-2 rounded-lg mt-12"
          >
            Show Less
          </button>
        )}
      </div>
    </>
  );
};

export default Articles;
