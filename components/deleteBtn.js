import Delete from '../icons/delete';

export default function DeleteBtn({ handleOnClick }) {
  return (
    <button
      className="col-start-3 col-end-4 row-start-1 row-end-2 flex items-center gap-2 bg-none  font-bold text-SoftRed "
      onClick={handleOnClick}
    >
      <Delete className="fill-SoftRed" />
      Delete
      <span className="sr-only">delete</span>
    </button>
  );
}
