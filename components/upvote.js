import Add from '../icons/add';
import Minus from '../icons/minus';
import { useAuth } from '../lib/auth';

export default function Upvote({ state, handleUpvote, handleDownvote }) {
  const auth = useAuth();
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3 flex  grid h-20 w-8 place-items-center justify-center rounded-lg bg-VeryLightGray text-xs font-medium ">
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
