'use client';
import { useGetAllBlogsQuery } from '@/Service/blog';
import React from 'react';
import { Blog,BlogPost } from '../../../types';
import Link from 'next/link';

const BlogCard = () => {
  const { data } = useGetAllBlogsQuery();
  // console.log(data);

  return (
    <div className="container mx-auto px-4 py-6 grid grid-cols-1 gap-6">
      {data?.map((ele: Blog) => (
        <Link href={`/DescriptionPage/${ele._id}`} key={ele._id} className="block">
          <div className="flex flex-col lg:flex-row bg-white border-gray-100 border-t-2 pt-3 overflow-hidden">
            {/* Left Column: Blog Content */}
            <div className="flex-1 p-4">
              {/* Blog Header */}
              <div className="flex items-center gap-4 mb-4 py-2">
                <img
                  src={ele.author?.image || "/Assets/image copy.png"}
                  alt={ele.author?.name || "Author"}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-semibold">
                    {ele.author ? ele.author.name : 'Yididia Kebede'}
                  </p>
                  <span className="text-sm text-gray-500">Apr 16, 2022</span>
                  <p className="text-sm text-gray-400">SOFTWARE ENGINEER</p>
                </div>
              </div>
              
              {/* Blog Title and Description */}
              <div className='mt-1'>
                <h1 className="font-bold text-3xl text-gray-800 mb-2">{ele.title}</h1>
                <p className="text-gray-600 mb-4 w-3/4">{ele.description}</p>
              </div>
              
              {/* Blog Skills */}
              <div className="flex gap-2 mt-3">
                {ele.skills && ele.skills.length > 0 ? (
                  ele.skills.slice(0, 2).map((skill, index) => (
                    <span
                      key={index}
                      className="bg-gray-200 text-gray-600 px-3 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))
                ) : (
                  <div className="flex gap-2 mt-3">
                    <span className="bg-gray-200 text-gray-600 px-3 py-2 rounded-full text-sm">
                      Web Development
                    </span>
                    <span className="bg-gray-200 text-gray-600 px-3 py-2 rounded-full text-sm">
                      Mobile
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column: Blog Image */}
            <div className="lg:w-1/3 flex-shrink-0 rounded-lg pt-3">
              <img
                src={ele.image || "/Assets/image copy 2.png"} 
                alt="Blog Image"
                className="w-[450px] h-[300px] rounded-lg"
              />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default BlogCard;
