import Add from '../icons/add';
import Minus from '../icons/minus';
export default function Upvote({ upvotes }) {
  return (
    <div className="col-start-1 col-end-2 row-start-1 row-end-3 flex  grid h-20 w-8 place-items-center justify-center rounded-lg bg-VeryLightGray text-xs font-medium ">
      <button>
        <Add className="fill-LightNavyVliot hover:fill-Liberty" />
        <span className="sr-only">Add</span>
      </button>
      <span className="text-lg font-bold text-Liberty">{upvotes}</span>
      <button>
        <Minus className="fill-LightNavyVliot hover:fill-Liberty" />
        <span className="sr-only">Minus</span>
      </button>
    </div>
  );
}
