'use client'
import BlogCard from '@/components/BlogCard/BlogCard'
import { Provider } from 'react-redux';
import { store } from '@/Store';
import React from 'react'


const page = () => {
  return (
    <div>
      <Provider store={store}>
      <BlogCard/>
    </Provider>
      
    </div>
  )
}

export default page