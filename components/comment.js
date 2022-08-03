import Upvote from './upvote.js';
import ReplyBtn from './replyBtn';
import Avatar from './Avatar';
import EditBtn from './editBtn';
import DeleteBtn from './deleteBtn';
import getDate from '../utils/timeStamp';
import useModal from '../utils/useModal';
import DeleteModal from './deleteModal';
import { useState } from 'react';
import { useAuth } from '../lib/auth';
import { updateUpvote, deleteComment } from '../lib/firestore';
import { useAsyncReference } from '../utils/useAsyncReference';
import { mutate } from 'swr';
import CommentForm from './CommentForm';
import CommentEdit from './commentEdit';

export default function Comment({
  id,
  commentText,
  userName,
  photoURL,
  replies,
  userUid,
  upvote,
  date,
}) {
  const auth = useAuth();
  // This state will manage the reply form
  const [isReplying, setReply] = useState(false);

  const handleReply = () => {
    setReply(!isReplying);
  };
  // This state will manage the delete modal
  const { isVisible, toggleModal } = useModal();
  // This state will manage the Edit
  const [isEditing, setEdit] = useState(false);
  // This state will manage the upvote
  const [state, setState] = useState(upvote);
  const [ref, updateState] = useAsyncReference(upvote);

  const handleUpvote = () => {
    setState(state + 1);
    updateState(state + 1);
    updateUpvote({ id, upvote: ref.current });
  };
  const handleDownvote = () => {
    if (state > 0) {
      setState(state - 1);
      updateState(state - 1);
    }
    updateUpvote({ id, upvote: ref.current });
  };
  return (
    <div key={id} className="flex flex-col gap-y-3  ">
      {/* the comment text section */}
      {isEditing ? (
        <CommentEdit
          id={id}
          commentText={commentText}
          handleIsEditing={() => setEdit(!isEditing)}
        />
      ) : (
        <div className="pw-12  grid h-max w-full grid-cols-[auto_minmax(0,1fr)_auto] grid-rows-[auto_1fr] gap-5 rounded-lg bg-white py-6 px-4">
          <Upvote
            state={state}
            handleUpvote={handleUpvote}
            handleDownvote={handleDownvote}
          />
          <div className="flex items-center gap-x-2  ">
            <Avatar src={photoURL} />
            <p className="text-sm font-bold text-DarkBlue">{userName}</p>
            <p className="text-sm font-semibold text-SlateGray">{date}</p>
          </div>
          <p className="col-start-2 col-end-3 row-start-2 row-end-3 ">
            {commentText}
          </p>
          {auth.user ? (
            auth.user.uid === userUid ? (
              <div className="flex flex-row gap-x-5">
                <DeleteBtn handleOnClick={toggleModal} />
                <EditBtn handleOnClick={() => setEdit(!isEditing)} />
              </div>
            ) : (
              <ReplyBtn handleOnClick={handleReply} />
            )
          ) : (
            ''
          )}
        </div>
      )}
      {/* the reply section  */}
      <div className="relative ml-24">
        <span className=" absolute -left-12 block h-full w-0.5 rounded-full bg-LightGray"></span>
        {replies.length > 0 && (
          <div className="flex flex-col gap-y-3">
            {replies.map((reply) => (
              // eslint-disable-next-line react/jsx-key
              <Comment
                id={reply.id}
                commentText={reply.commentText}
                replies={[]}
                parentUid={reply.parentUid}
                userName={reply.userName}
                photoURL={reply.photoURL}
                userUid={reply.userUid}
                upvote={reply.upvote}
                date={reply.date}
              />
            ))}
          </div>
        )}
        {isReplying && <CommentForm parentId={id} handleReply={handleReply} />}
      </div>
      <DeleteModal
        isVisible={isVisible}
        hideModal={toggleModal}
        onDelete={() => {
          deleteComment(id);
          toggleModal();
          mutate(
            '/api/comments',
            async (data) => data.filter((comment) => comment.id !== id),
            false
          );
        }}
      />
    </div>
  );
}
