import Header from "./ components/Header";
import BlogGrid from "./ components/Post";

export default function Home() {
  const blogs = [
    {
      id: 1,
      title: "Introduction to React",
      content: "This is a blog post about the basics of React.",
      author: "John Doe",
    },
    {
      id: 2,
      title: "JavaScript ES6 Features",
      content: "Learn about the new features introduced in ES6.",
      author: "Jane Smith",
    },
    {
      id: 3,
      title: "CSS Grid Layout",
      content: "An in-depth guide to CSS Grid Layout.",
      author: "Alex Johnson",
    },
    // Add more blog posts here
  ];

  return (
    <>
      <Header></Header>
      <BlogGrid posts={blogs}></BlogGrid>
    </>
  );
}
