import fetcher from '../utils/fetcher';
import useSWR from 'swr';
import Comment from '../components/comment';
import getDate from '../utils/timeStamp';

export default function CommentList() {
  const { data } = useSWR('/api/comments', fetcher);
  // If this it's a  child component, we apply diff style. This is useful to offset child comments from the parent and make a hierachy effect
  const getReplies = (data, commentUid) =>
    data.filter((comment) => comment.parentUid === commentUid);

  if (!data) <div>Loading...</div>;

  if (data) {
    return (
      <>
        {data.map((commentList) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <Comment
              id={commentList.id}
              replies={getReplies(data, commentList.id)}
              commentText={commentList.commentText}
              userName={commentList.userName}
              photoURL={commentList.photoURL}
              userUid={commentList.userUid}
              upvote={commentList.upvote}
              date={getDate(commentList.date)}
              // date={commentList.date.getTime()}
            />
          );
        })}
      </>
    );
  }
}
