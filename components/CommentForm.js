import { useForm } from 'react-hook-form';
import { useAuth } from '../lib/auth';
import Avatar from './Avatar';
import { addComment } from '../lib/firestore';

export default function CommentForm() {
  const auth = useAuth();
  const { register, handleSubmit, watch, reset } = useForm();

  const onSubmit = (data) => {
    addComment({
      ...data,
      uid: auth.user.uid,
      userName: auth.user.name,
      upvotes: 0,
      date: new Date().toISOString(),
    });
    reset();
  };

  return (
    <form
      className="flex flex-row w-full gap-4 pw-12 py-8 px-4 bg-white rounded-lg items-start justify-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* register your input into the hook by invoking the "register" function */}
      {/* <input defaultValue="Add comment" {...register('Add comment')} /> */}
      {auth.user ? <Avatar src={auth.user.photoURL} /> : ''}
      <textarea
        className={`py-8 px-4 w-9/12  resize-none text-black bg-white rounded-lg border border-2 border-LightGray ${
          auth.user
            ? 'focus:outline-HanBlue cursor-pointer '
            : 'focus:outline-0  cursor-not-allowed'
        } `}
        rows="2,5 "
        maxLength="300"
        placeholder="Add comment ... "
        {...register('commentText', { required: true })}
        disabled={!auth.user}
      />
      {/* errors will return when field validation fails  */}
      {/* {errors.exampleRequired && <span>Write a com  mnet</span>} */}
      <button
        className={` ${
          auth.user
            ? 'bg-Liberty cursor-pointer'
            : 'bg-LavenderBlue cursor-not-allowed'
        } font-medium px-8 py-3 rounded-lg text-white hover:bg-#ecbcfd`}
      >
        Send
      </button>
    </form>
  );
}
