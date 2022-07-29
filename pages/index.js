import { useAuth } from '../lib/auth';
import Header from '../components/header';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/commentList';

export default function Home() {
  const auth = useAuth();
  return (
    <div className="bg-VeryLightGray min-h-screen">
      {/********************** Header  **********************/}

      <Header userAuth={auth.user} />
      {/********************** Content (list of comments) **********************/}

      <div className="py-12 w-full flex justify-center ">
        <div className=" w-1/2 lg:w-5/6 bg-transparent grid gap-y-3">
          <CommentList />
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
