import Avatar from './Avatar';
import { useForm } from 'react-hook-form';
import { useAuth } from '../lib/auth';
import { addComment } from '../lib/firestore';
import { mutate } from 'swr';
import { serverTimestamp } from '@firebase/firestore';

export default function CommentForm({ isReplying, parentId, handleReply }) {
  const auth = useAuth();
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    const newComment = {
      commentText: data.commentText,
      parentUid: isReplying ? parentId : null,
      userUid: auth.user.uid,
      photoURL: auth.user.photoURL,
      userName: auth.user.name,
      upvote: 0,
      date: serverTimestamp(),
    };
    addComment(newComment);
    mutate(
      '/api/comments',
      async (data) => {
        return [...data, newComment];
      },
      false
    );
    reset();
    handleReply();
  };

  return (
    <form
      className={
        'flex flex-row  items-start justify-center gap-4 rounded-lg bg-white py-8 px-4'
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      {auth.user ? <Avatar src={auth.user.photoURL} /> : ''}
      <textarea
        className={`w-9/12 resize-none rounded-lg  border border-2 border-LightGray bg-white p-4 text-black ${
          auth.user
            ? 'cursor-pointer focus:outline-HanBlue '
            : 'cursor-not-allowed  focus:outline-0'
        } `}
        rows="2,5 "
        placeholder="Add comment ... "
        {...register('commentText', { required: true })}
        disabled={!auth.user}
      />
      <button
        className={` ${
          auth.user
            ? 'cursor-pointer bg-Liberty'
            : 'cursor-not-allowed bg-LavenderBlue'
        } hover:bg-#ecbcfd rounded-lg px-8 py-3 font-medium text-white`}
      >
        Send
      </button>
    </form>
  );
}
