import Avatar from './Avatar';
import { useForm } from 'react-hook-form';
import { useAuth } from '../lib/auth';
import { addComment } from '../lib/firestore';
import { mutate } from 'swr';

export default function CommentForm({ handleReply, parentId }) {
  const auth = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const newComment = {
      commentText: data.commentText,
      parentUid: parentId,
      userUid: auth.user.uid,
      photoURL: auth.user.photoURL,
      userName: auth.user.name,
      upvote: 0,
      date: new Date().toLocaleString().replace(',', ''),
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
        'grid grid-cols-[auto_minmax(0,1fr)_auto] grid-rows-[auto_1fr] items-start justify-center gap-4 rounded-lg bg-white py-8 px-4 '
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" sm:row-start-2 sm:row-end-2">
        {auth.user ? <Avatar src={auth.user.photoURL} /> : ''}
      </div>
      <textarea
        className={`w-full resize-none rounded-lg  border border-2 border-LightGray bg-white p-4 text-black sm:col-start-1 sm:col-end-4 ${
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
        } hover:bg-#ecbcfd max-w-btn rounded-lg px-8 py-3 font-medium text-white sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3`}
      >
        Send
      </button>
    </form>
  );
}
