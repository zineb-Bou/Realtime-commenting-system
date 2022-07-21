import dynamic from 'next/dynamic';
import Upvote from './upvote.js';
import ReplyBtn from './replyBtn';
import Avatar from './Avatar';
import { useState } from 'react';

export default function Comment() {
  const [reply, setReply] = useState(false); // This state will manage the reply form

  const CommentForm = dynamic(() => import('./CommentForm')); // No need to import this component if the user won't click on "Reply"

  return (
    <div className="flex flex-row w-full gap-4 pw-12 py-6 px-4 h-44 bg-white rounded-lg items-start justify-center ">
      <Upvote />
      {/* <div className="flex border border-2">
        <Avatar src={auth.user.photoURL} />
      </div> */}
      <p>Hi there</p>
      <ReplyBtn />
    </div>
  );
}
