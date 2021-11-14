import React from 'react';
import api from '../api';
import PostCard from './PostCard';

const PostList = () => {
  const [ posts, setPosts ] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await api.getPosts();
        console.log('result', data.items);
        setPosts(data.items);
      } catch (error) {
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <section data-testid="post-list">
      <h2 className="[ text-3xl text-center ]">Portfolio</h2>
      <div className="[ flex justify-center flex-wrap ] p-10">
        {posts.map((post, i) => <PostCard key={i} title={post.title} content={post.content} />)}
      </div>
    </section>
  )
}

export default PostList;
