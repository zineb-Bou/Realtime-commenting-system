import Add from '../icons/add';
import Minus from '../icons/minus';
import { useAuth } from '../lib/auth';

export default function Upvote({ state, handleUpvote, handleDownvote }) {
  const auth = useAuth();
  return (
    <div className=" flex flex-col place-items-center justify-center gap-4 rounded-xl bg-VeryLightGray py-2 px-4  font-medium sm:flex-row">
      <button
        className={`${!auth.user ? 'cursor-not-allowed' : ' cursor-pointer '} `}
        onClick={handleUpvote}
        disabled={!auth.user}
      >
        <Add className="fill-LightNavyVliot hover:fill-Liberty" />
        <span className="sr-only">Add</span>
      </button>
      <span className="text-lg font-bold text-Liberty">{state}</span>
      <button
        className={`${!auth.user ? 'cursor-not-allowed' : ' cursor-pointer '} `}
        onClick={handleDownvote}
      >
        <Minus className="fill-LightNavyVliot hover:fill-Liberty" />
        <span className="sr-only">Minus</span>
      </button>
    </div>
  );
}
