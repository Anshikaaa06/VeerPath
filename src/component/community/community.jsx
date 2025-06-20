import { useEffect, useState } from "react";

function Community() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/community")
      .then((res) => res.json()) 
      .then((data) => setPosts(data)); 
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Community</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {posts?.map((post) => (
          <div key={post._id} className="p-4 border rounded shadow">
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <span>By: {post.author}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Community;
