import Upvote from './upvote.js';
import ReplyBtn from './replyBtn';
import Avatar from './Avatar';
import EditBtn from './editBtn';
import DeleteBtn from './deleteBtn';
import getDate from '../utils/timeStamp';
import useModal from '../utils/useModal';
import DeleteModal from './deleteModal';
import CommentForm from './CommentForm';
import CommentEdit from './commentEdit';
import { useState } from 'react';
import { useAuth } from '../lib/auth';
import { updateUpvote, deleteComment } from '../lib/firestore';
import { useAsyncReference } from '../utils/useAsyncReference';
import { mutate } from 'swr';

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
          userName={userName}
          handleIsEditing={() => setEdit(!isEditing)}
        />
      ) : (
        <div className="pw-12  grid h-max w-full grid-cols-[auto_minmax(0,1fr)_auto] grid-rows-[auto_1fr] gap-5 rounded-lg bg-white py-6 px-4 sm:grid-cols-[auto_minmax(0,1fr)] sm:grid-rows-[auto_1fr_auto]">
          <div className="row-start-1 row-end-3 sm:col-start-1 sm:col-end-2 sm:row-start-3 sm:row-end-4">
            <Upvote
              state={state}
              handleUpvote={handleUpvote}
              handleDownvote={handleDownvote}
            />
          </div>
          <div className="flex items-center gap-x-2  sm:col-start-1 sm:col-end-3 ">
            <Avatar src={photoURL} />
            <p className="text-sm font-bold text-DarkBlue">{userName}</p>
            <p className="text-sm font-semibold text-SlateGray">{date}</p>
          </div>
          <p className="roSw-end-3 col-start-2 col-end-3 row-start-2  sm:col-start-1 sm:col-end-3 sm:row-start-2 sm:row-end-3">
            {commentText}
          </p>
          {auth.user ? (
            auth.user.uid === userUid ? (
              <div className="flex flex-row gap-x-5 sm:col-start-2 sm:col-end-3 sm:justify-self-end">
                <DeleteBtn handleOnClick={toggleModal} />
                <EditBtn handleOnClick={() => setEdit(!isEditing)} />
              </div>
            ) : (
              <div className="sm:col-start-2 sm:col-end-3 sm:justify-self-end">
                <ReplyBtn handleOnClick={handleReply} />
              </div>
            )
          ) : (
            ''
          )}
        </div>
      )}
      {/* the reply section  ---- Here we apply diff style. This is useful to
      offset child comments from the parent and make a hierachy effect */}

      <div className="relative ml-24 sm:ml-8">
        <span className=" absolute -left-12 block h-full w-0.5 rounded-full bg-LightGray sm:-left-5"></span>
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
