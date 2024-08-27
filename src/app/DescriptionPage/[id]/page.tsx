// /pages/blogs/[id]/index.tsx
'use client'
import React from 'react';
import { Provider } from 'react-redux';
import { store } from '@/Store';
import CardDescription from '@/components/Description/CardDescription';
import { useRouter } from 'next/router';

interface idParamsType{
  params:{
    _id:string;
  }
}
const BlogPage = ({params}:idParamsType) => {
  return (
    <Provider store={store}>
      <CardDescription _id={params._id}/>
    </Provider>
  )
}
export default BlogPage;
