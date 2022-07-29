import fetcher from '../utils/fetcher';
import useSWR from 'swr';
import Comment from '../components/comment';
import getDate from '../utils/timeStamp';
// .sort(
//   (a, b) =>
//     new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
// );

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
            <Comment
              key={commentList.id}
              replies={getReplies(data, commentList.id)}
              commentText={commentList.commentText}
              userName={commentList.userName}
              photoURL={commentList.photoURL}
              userUid={commentList.userUid}
              upvotes={commentList.upvotes}
              date={getDate(commentList.date)}
              // date={commentList.date.getTime()}
            />
          );
        })}
      </>
    );
  }
}
