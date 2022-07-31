import { createPortal } from 'react-dom';

const DeleteModal = ({ isVisible, hideModal }) => {
  return isVisible
    ? createPortal(
        <div className="fade fixed top-0 left-0  grid h-full w-full  place-items-center bg-black bg-opacity-50 outline-none">
          <div className="mx-2 flex w-80 flex-col gap-y-3 rounded-lg bg-white p-6">
            <h3 className=" text-lg font-bold ">Delete Document</h3>
            <p className="text-sm font-medium text-GrayishBlue">
              Are you sure you want to delete this comment? This will remove the
              comment and cant be undone.
            </p>
            <div className="flex gap-x-4">
              <button
                className="rounded-lg bg-SlateGray px-4 py-2 font-Rubik text-xs uppercase tracking-widest	 text-white	"
                onClick={hideModal}
              >
                No, Cancel
              </button>
              <button
                className="rounded-lg bg-SoftRed px-4 py-2 font-Rubik text-xs  uppercase tracking-widest	 text-white	"
                onClick={hideModal}
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;
};

export default DeleteModal;
