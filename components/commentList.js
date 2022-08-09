import Comment from './comment';
import fetcher from '../utils/fetcher';
import useSWR from 'swr';

export default function CommentList() {
  const { data } = useSWR('/api/comments', fetcher);
  //retrieve  replies of each comment
  const getReplies = (data, commentUid) =>
    data.filter((comment) => comment.parentUid === commentUid);

  if (!data) <div>Loading...</div>;

  if (data) {
    return (
      <>
        {data.map((commentList) => {
          return (
            // eslint-disable-next-line react/jsx-key
            !commentList.parentUid && (
              <Comment
                id={commentList.id}
                replies={getReplies(data, commentList.id)}
                parentUid={commentList.parentUid}
                commentText={commentList.commentText}
                userName={commentList.userName}
                photoURL={commentList.photoURL}
                userUid={commentList.userUid}
                upvote={commentList.upvote}
                date={commentList.date}
              />
            )
          );
        })}
      </>
    );
  }
}
