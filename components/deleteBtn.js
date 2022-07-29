import Delete from '../icons/delete';

export default function DeleteBtn() {
  return (
    <button className="col-start-3 col-end-4 row-start-1 row-end-2  items-center bg-none ">
      <Delete className="fill-SoftRed" />
      <span className="sr-only">delete</span>
    </button>
  );
}
