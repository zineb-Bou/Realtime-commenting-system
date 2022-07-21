import { useAuth } from '../lib/auth';
import Header from '../components/header';
import CommentForm from '../components/CommentForm';
import fetcher from '../utils/fetcher';
import useSWR, { useSWRConfig } from 'swr';
import Comment from '../components/comment';

export default function Home() {
  const auth = useAuth();

  const { mutate } = useSWRConfig();

  const { data } = useSWR('/api/comments', fetcher);

  return (
    <div className="bg-VeryLightGray min-h-screen">
      {/********************** Header  **********************/}

      <Header userAuth={auth.user} />

      {/********************** Content (list of comments) **********************/}

      <div className="py-12 w-full flex justify-center ">
        <div className=" w-3/5 lg:w-5/6 bg-transparent grid gap-y-4">
          {console.log(data)}
          <Comment />
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
