import React from 'react'
import { Article } from '../components/TrendingArticles';
import { formatDate } from '../utils/formatDate';
import Image from 'next/image';
import empty_image from "../assets/images/empty-image.jpg";
import Articles from '../components/Articles';

interface Props {
    params: {
      article: string;
    };
  }

const page = async ({ params: { article: id } }: Props) => {

    const fetchArticle = async ():Promise<Article> => {
        const res = await fetch(`https://dev.to/api/articles/${id}`, { next: { revalidate: 60 } });
        const article = await res?.json();
        return article;
    }
    const article = await fetchArticle();

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
      <>
        <div className="lg:px-12 md:px-6 px-4 py-6">
            <span className='inline-block bg-[#cfcece89] px-4 py-2 rounded text-hue'>{article?.organization?.name || article.tags[0]}</span>
            <h1 className='my-2 lg:text-4xl text-2xl font-bold'>{article.title}</h1>
            <span className='text-gray'>{formatDate(article.created_at)}</span>
            <Image
            src={article.cover_image || empty_image}
            alt="banner"
            className="w-full lg:h-[80vh] h-[50vh] mt-4 rounded-lg object-cover object-top"
            width={1000}
            height={420}
            />
            <p className="mt-4">{article.description}</p>
            <ol className='n list-decimal list-inside flex flex-col gap-2'>
                {Array.isArray(article?.tags) ? (
                    article.tags.map((tag, index) => (
                    <li key={index} className='text-lg font-semibold'>{tag}</li>
                    ))
                ) : (
                    <li>No tags available</li>
                )}
            </ol>
                <span className="text-xl text-center block mt-6 font-semibold text-hue">More articles</span>
          <Articles articles={articles} no_articles={3}/>
        </div>
      </>
  )
}

export default page