// pages/index.js
import Head from 'next/head';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NewPostForm from '../components/NewPostForm';
import Post from '../components/Post';
import { useEffect, useState } from 'react';

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/posts');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);

  return (
    <div>
      <Head>
        <title>The Feed</title>
        <meta name="description" content="A blogging platform" />
      </Head>
      <Header />
      <main className="p-4">
        <h2 className="text-3xl font-bold">Welcome to The Feed</h2>
        <p>Your go-to place for insightful articles and blogs.</p>
        <NewPostForm />
        <h3 className="text-2xl font-bold mt-6">Blog Posts</h3>
        {posts.map((post) => (
          <Post key={post._id} post={post} />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Home;