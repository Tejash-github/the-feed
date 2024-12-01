// components/NewPostForm.js
import { useState } from 'react';

const NewPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, author }),
    });
    if (res.ok) {
      const newPost = await res.json();
      console.log('Post created:', newPost);
      // Optionally, reset the form or redirect to the new post page
      setTitle('');
      setContent('');
      setAuthor('');
    } else {
      console.error('Failed to create post');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div>
        <label className="block mb-2">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block mb-2">Content</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <div>
        <label className="block mb-2">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          className="border p-2 w-full"
        />
      </div>
      <button type="submit" className="bg-blue-500 text-white p-2 mt-4">Create Post</button>
    </form>
  );
};

export default NewPostForm;