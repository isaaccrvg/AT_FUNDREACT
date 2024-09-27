import React, { useState, useEffect } from 'react';
import api from './api/FetchData';
import User from './components/user/User';
import Post from './components/post/Post';
import Comment from './components/comment/Comment';
import './App.css'
const App = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchUsersData = async () => {
      const usersData = await api.fetchUsers();
      setUsers(usersData);
    };

    fetchUsersData();
  }, []);

  const handleUserClick = async (userId) => {
    const userPosts = await api.fetchPosts(userId);
    setSelectedUser(userId);
    setPosts(userPosts);
    setSelectedPost(null); // Reset selected post when selecting a new user
    setComments([]); // Reset comments when selecting a new user
  };

  const handlePostClick = async (postId) => {
    const postComments = await api.fetchComments(postId);
    setSelectedPost(postId);
    setComments(postComments);
  };

  const handleBackToUsers = () => {
    setSelectedUser(null);
    setPosts([]);
  };

  const handleBackToPosts = () => {
    setSelectedPost(null);
    setComments([]);
  };

  return (
    <div>
      <header className=''>
        <h1>Twitter</h1>
      </header>
      <main>
        {selectedUser === null ? (
          <div className="user-grid">
            {users.map(user => (
              <User key={user.id} user={user} onClick={() => handleUserClick(user.id)} />
            ))}
          </div>
        ) : selectedPost === null ? (
          <div>
            <button onClick={handleBackToUsers}>Voltar</button>
            {posts.map(post => (
              <Post key={post.id} post={post} onClick={() => handlePostClick(post.id)} />
            ))}
          </div>
        ) : (
          <div>
            <button onClick={handleBackToPosts}>Voltar</button>
            {comments.map(comment => (
              <Comment key={comment.id} comment={comment} />
            ))}
          </div>
        )}
      </main>
      <footer>
        <p>© 2024 Minha Aplicação</p>
      </footer>
    </div>
  );
}


export default App;
