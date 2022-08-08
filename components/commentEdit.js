import Avatar from './Avatar';
import { useForm } from 'react-hook-form';
import { useAuth } from '../lib/auth';
import { mutate } from 'swr';
import { editComment } from '../lib/firestore';

export default function CommentEdit({
  commentText,
  handleIsEditing,
  id,
  userName,
}) {
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
        'grid grid-cols-[auto_minmax(0,1fr)_auto] grid-rows-[auto_1fr] items-start justify-center gap-4 rounded-lg bg-white py-8 px-4'
      }
      onSubmit={handleSubmit(onSubmit)}
    >
      {auth.user ? (
        <div className=" flex items-center gap-2 sm:row-start-2 sm:row-end-2">
          <Avatar src={auth.user.photoURL} />
          <p className="text-sm font-bold text-DarkBlue">{userName}</p>
        </div>
      ) : (
        ''
      )}
      <textarea
        defaultValue={commentText}
        className="w-full resize-none rounded-lg  border border-2 border-LightGray bg-white p-4 text-black focus:outline-HanBlue sm:col-start-1 sm:col-end-4 "
        rows="3"
        // placeholder="Add comment ... "
        {...register('commentText', { required: true })}
      />
      <button className="hover:bg-#ecbcfd cursor-pointer rounded-lg bg-Liberty px-8 py-3 font-medium text-white sm:col-start-3 sm:col-end-4 sm:row-start-2 sm:row-end-3">
        Update
      </button>
    </form>
  );
}
