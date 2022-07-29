import fetcher from '../utils/fetcher';
import useSWR, { useSWRConfig } from 'swr';
import Comment from '../components/comment';
import { getAllComments, getAllReplies } from '../lib/firestore';
import { useState } from 'react';

// .sort(
//   (a, b) =>
//     new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
// );

export default function CommentList() {
  const { data } = useSWR('/api/comments', fetcher);
  // If this it's a  child component, we apply diff style. This is useful to offset child comments from the parent and make a hierachy effect
  //   const [child, setChild] = useState(false);
  const getReplies = (data, commentUid) => {
    return data.filter((comment) => comment.parentUid === commentUid);
  };

  if (!data) {
    return <div>Loading...</div>;
  }
  if (data) {
    return (
      <>
        {data.map((commentList) => {
          return (
            <Comment
              key={commentList.id}
              replies={getReplies(data, commentList.id)}
              commentText={commentList.commentText}
              userName={commentList.userName}
              photoURL={commentList.photoURL}
              userUid={commentList.userUid}
            />
          );
        })}
      </>
    );
  }
}
