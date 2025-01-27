import React from 'react'
import SearchNArticles from './SearchNArticles'

export interface Article{
  id: number,
  title: string,
  cover_image: string,
  description: string,
  created_at: string,
  reading_time_minutes: number,
  organization: {name: string},
  tag_list: string[],
  tags: string[]
}

const TrendingArticles = async () => {

  // Gets all articles
  const fetchArticles =  async () => {
    const res = await fetch(`https://dev.to/api/articles`, { next: { revalidate: 3000 } });

    if (!res.ok) {
        throw new Error("Network response was not ok");
    }

    const articles = await res.json();

    return articles;
  }

  const articles = await fetchArticles();

  return (
    <div className="lg:px-12 px-4 lg:py-20 py-12 bg-slate-100 text-hue text-center">
      <h2 className="lg:text-3xl text-2xl">Stay Updated with the Latest trends in Tobams Group</h2>
      <SearchNArticles articles={articles}/>
    </div>
  )
}

export default TrendingArticles