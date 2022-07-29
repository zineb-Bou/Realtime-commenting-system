import Edit from '../icons/edit';

export default function EditBtn() {
  return (
    <button className="col-start-3 col-end-4 row-start-1 row-end-2  items-center bg-none ">
      <Edit className="fill-Liberty" />
      <span className="sr-only">delete</span>
    </button>
  );
}
