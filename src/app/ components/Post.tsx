import React from "react";

// Define the type for a single blog post
type BlogPost = {
  id: number;
  title: string;
  content: string;
  author: string;
};

// Define the props type for the BlogGrid component
type BlogGridProps = {
  posts: BlogPost[];
};

const BlogGrid: React.FC<BlogGridProps> = ({ posts }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {posts.map((post) => (
        <div key={post.id} className="p-4 bg-gray-100">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-700 mb-4">{post.content}</p>
          <p className="text-gray-500">Author: {post.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogGrid;
