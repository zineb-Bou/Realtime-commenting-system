import Reply from '../icons/reply';

export default function ReplyBtn({ handleOnClick }) {
  return (
    <button
      className="col-start-3 col-end-4 row-start-1 row-end-2 flex flex-row items-center gap-2 bg-none font-bold text-Liberty"
      onClick={handleOnClick}
    >
      <Reply className="fill-Liberty" />
      Reply
    </button>
  );
}
