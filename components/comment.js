import dynamic from 'next/dynamic';
import Upvote from './upvote.js';
import ReplyBtn from './replyBtn';
import Avatar from './Avatar';
import { useState } from 'react';
import { useAuth } from '../lib/auth';
import EditBtn from './editBtn';
import DeleteBtn from './deleteBtn';
import getDate from '../utils/timeStamp';

export default function Comment({
  key,
  commentText,
  userName,
  photoURL,
  replies,
  userUid,
  upvotes,
  date,
}) {
  const auth = useAuth();
  const [isReplying, setReply] = useState(false); // This state will manage the reply form
  const CommentForm = dynamic(() => import('./CommentForm')); // No need to import this component if the user won't click on "Reply"

  return (
    <div className="flex flex-col gap-y-3  ">
      <div
        key={key}
        className="pw-12  grid h-max w-full grid-cols-[auto_minmax(0,1fr)_auto] grid-rows-[auto_1fr] gap-5 rounded-lg bg-white py-6 px-4"
      >
        <Upvote upvotes={upvotes} />
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
              <DeleteBtn />
              <EditBtn />
            </div>
          ) : (
            <ReplyBtn handleOnClick={() => setReply(true)} />
          )
        ) : (
          ''
        )}
      </div>
      {isReplying && <CommentForm isReplying={isReplying} />}
      {replies.length > 0 && (
        <div className="relative ml-24 flex flex-col gap-y-3">
          <span className=" absolute -left-12 block h-full w-0.5 rounded-full bg-LightGray"></span>
          {replies.map((reply) => (
            <Comment
              key={reply.id}
              commentText={reply.commentText}
              replies={[]}
              userName={reply.userName}
              photoURL={reply.photoURL}
              userUid={reply.userUid}
              upvotes={reply.upvotes}
              date={getDate(reply.date)}
              //setActiveComment={setActiveComment}
              // activeComment={activeComment}
              // updateComment={updateComment}
              // deleteComment={deleteComment}
              // addComment={addComment}
              // parentId={comment.id}
              //currentUserId={currentUserId}
            />
          ))}
        </div>
      )}
    </div>
  );
}
