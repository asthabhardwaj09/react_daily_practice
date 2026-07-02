import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);

  const fetchPosts = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <button
          key={post.id}
          onClick={() => setSelectedPost(post)}
        >
          Post {post.id}
        </button>
      ))}

      {selectedPost && (
        <div>
          <h2>{selectedPost.title}</h2>
          <p>{selectedPost.body}</p>
        </div>
      )}
    </div>
  );
}

export default App;