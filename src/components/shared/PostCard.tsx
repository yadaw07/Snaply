import type { Post } from '@/types';

import { useAuthStore } from '@/zustand_store/authStore';
import { Link, useNavigate } from 'react-router';

import { formatDate } from '@/lib/utils';

import PostStats from './PostStats';
import { toast } from 'sonner';

import { useDeletePost } from '@/lib/tanstack-query/queriesAndMutaions';

type PostCardProps = {
  post: Post;
};

const PostCard = ({ post }: PostCardProps) => {
  const user = useAuthStore((state) => state.user);

  const navigate = useNavigate();
  const { mutate: deletePost } = useDeletePost();

  const handleDeletePost = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent Link from triggering
    deletePost(
      { postId: post.$id, imageId: post.imageId },
      {
        onSuccess: () => {
          toast.success('Post deleted successfully');
          navigate('/');
        },
        onError: () => {
          toast.error('Failed to delete post. Please try again.');
        },
      },
    );
  };

  return (
    <div className='post-card'>
      <div className='flex-between'>
        <div className='flex items-center gap-3'>
          <Link to={`/profile/${post.creator.$id}`}>
            <img
              src={
                post?.creator?.imageUrl ||
                '/assets/icons/profile-placeholder.svg'
              }
              alt='creator'
              className='w-12 lg:h-12 rounded-full object-cover'
            />
          </Link>
          <div className='flex flex-col'>
            <p className='base-medium lg:body-bold text-light-1'>
              {post.creator.name}
            </p>
            <div className='flex-center gap-2 text-light-3'>
              <p className='subtle-semibold lg:small-regular'>
                {formatDate(post.$createdAt)}
              </p>{' '}
              -{' '}
              <p className='subtle-semibold lg:small-regular'>
                {post.location}
              </p>
            </div>
          </div>
        </div>
        <div className='flex items-center gap-4'>
          <Link
            to={`update-post/${post.$id}`}
            className={`${user?.id !== post.creator.$id && 'hidden'}`}
          >
            <img
              src='assets/icons/edit.svg'
              alt='edit'
              className='cursor-pointer w-6 h-6'
            />
          </Link>
          <img
            src='assets/icons/delete.svg'
            alt='delete'
            className={`${user?.id !== post.creator.$id && 'hidden'} cursor-pointer w-6 h-6`}
            onClick={handleDeletePost}
          />
        </div>
      </div>

      <Link to={`/posts/${post.$id}`}>
        <div className='lg:base-medium small-medium py-5'>
          <p>{post.caption}</p>
          <ul className='flex gap-1 mt-2'>
            {post.tags.map((tag: string) => (
              <li key={tag} className='text-light-3'>
                #{tag}
              </li>
            ))}
          </ul>
        </div>

        <img
          src={post.imageUrl || '/assets/icons/profile-placeholder.svg'}
          alt='post image'
          className='post-card_img'
        />
      </Link>

      <PostStats post={post} userId={user?.id} />
    </div>
  );
};

export default PostCard;
