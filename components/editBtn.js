import Edit from '../icons/edit';

export default function EditBtn({ handleOnClick }) {
  return (
    <button
      onClick={handleOnClick}
      className=" col-start-3  col-end-4 row-start-1 row-end-2 flex items-center gap-2 bg-none  font-bold text-Liberty "
    >
      <Edit className="fill-Liberty" />
      Edit
      <span className="sr-only">delete</span>
    </button>
  );
}
