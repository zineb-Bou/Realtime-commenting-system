import Avatar from './Avatar';
import { useForm } from 'react-hook-form';
import { useAuth } from '../lib/auth';
import { mutate } from 'swr';
import { editComment } from '../lib/firestore';

export default function CommentEdit({ commentText, handleIsEditing, id }) {
  const auth = useAuth();
  const { register, handleSubmit } = useForm();
  const onSubmit = async ({ commentText }) => {
    await editComment({ commentText, id });
    mutate('/api/comments');
    handleIsEditing();
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
        defaultValue={commentText}
        className="w-9/12 resize-none rounded-lg  border border-2 border-LightGray bg-white p-4 text-black focus:outline-HanBlue"
        rows="3"
        // placeholder="Add comment ... "
        {...register('commentText', { required: true })}
      />
      <button className="hover:bg-#ecbcfd cursor-pointer rounded-lg bg-Liberty px-8 py-3 font-medium text-white">
        Update
      </button>
    </form>
  );
}
