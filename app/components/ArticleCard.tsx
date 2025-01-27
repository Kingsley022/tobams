import React from 'react'
import { formatDate } from '../utils/formatDate';
import Link from 'next/link';
import Image from 'next/image';
import { Article } from './TrendingArticles';
import empty_image from "../assets/images/empty-image.jpg";


const ArticleCard = ({ article }: { article: Article }) => {
    return (
        <div key={article.id} className="flex flex-col rounded-t-xl overflow-hidden gap-4 mb-6 relative">  
            <p className='bg-[#ffffff7e] rounded absolute top-2 left-2 z-20 p-2 capitalize'>{article?.organization?.name || article.tag_list[0]}</p>
            <div className="w-full h-[300px] block relative">
                <Image src={article.cover_image || empty_image} alt='banner' fill style={{ objectFit: 'cover' }}  />
                <div className="absolute top-0 bg-[#00000038] w-full h-full"></div>
            </div>

            <div className="flex flex-col gap-3 text-left">
                <h3 className="text-left font-medium text-black">{article.title}</h3>
                <p className="text-[gray]">
                {article?.description?.length > 145 
                    ? `${article.description.slice(0, 142)}...` 
                    : article.description}
                </p>
                
                <div className="flex justify-between text-sm items-center leading-3 mt-2">
                <div className="flex text-[gray] items-center">
                    <span className='pr-2 border-r-[1.5px] border-[gray]'>{formatDate(article.created_at)}</span>
                    <span className='pl-2'>{article.reading_time_minutes} mins read</span>
                </div>

                <Link href={`/${article.id}`} className='border-b-[1.5px] border-hue leading-5'>View Post</Link>
                </div>
            </div>
        </div>
    )
}

export default ArticleCard