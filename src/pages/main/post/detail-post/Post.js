import { useParams } from 'react-router';
import { useSelector } from 'react-redux';

import PostContent from './PostContent';
import CategoryList from './CategoryList';
import PostComment from './PostComment';

const Post = () => {
  const { postId } = useParams();
  const posts = useSelector((state) => state.post.items);
  const renderPost = posts.filter((post) => post.id === postId);

  return (
    <section>
      <PostContent post={renderPost[0]} />

      {/* Post Comment */}
      <PostComment />

      {/* Category List */}
      <CategoryList category={renderPost[0].category} />
    </section>
  );
};

export default Post;
