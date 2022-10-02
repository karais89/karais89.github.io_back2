import React from 'react';
import BlogPostItem from '@theme-original/BlogPostItem';
import MyCustomCommentSystem from '@site/src/MyCustomCommentSystem';

export default function BlogPostItemWrapper(props) {
  return (
    <>
      <BlogPostItem {...props} />
      <MyCustomCommentSystem {...props} />
    </>
  );
}