"use client"
import React, { useState } from 'react'
import { Article } from './TrendingArticles'
import ArticleCard from './ArticleCard'

interface Props{
    articles: Article[],
    no_articles?: number,
}

const Articles = ({articles, no_articles=6}:Props) => {
    const [numberOfArticles, setNumberOfArticles] = useState(no_articles);

    const handleLoadMore = () => {
        if (numberOfArticles < articles.length) {
            setNumberOfArticles(prev => Math.min(prev + no_articles, articles.length));
        }
    }

    const handleShowLess = () => {
        setNumberOfArticles(6)
    }

    return (
        <>        
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-12 gap-6">
                {
                    articles.slice(0,numberOfArticles)?.map((article:Article)=> (
                        <ArticleCard article={article} key={article.id}/>
                    ))
                }
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
    )
}

export default Articles