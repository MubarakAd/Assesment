import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import  { Author,Blog,BlogPost,BlogPostById } from  '../../types'
import React from 'react'

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://a2sv-backend.onrender.com/api/' }),
    endpoints: (builder) => ({
      getAllBlogs: builder.query<Blog[], void>({
        query: (name) => `blogs`,
      }),
      getBlogsById:builder.query<Blog, String>({
        query: (_id) => `blogs/${_id}`,
      }),
    }),
  })
  
  // Export hooks for usage in functional components, which are
  // auto-generated based on the defined endpoints
  export const { useGetAllBlogsQuery,useGetBlogsByIdQuery } =blogApi