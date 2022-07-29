import { useAuth } from '../lib/auth';
import Header from '../components/header';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/commentList';

export default function Home() {
  const auth = useAuth();
  return (
    <div className="min-h-screen bg-VeryLightGray">
      {/********************** Header  **********************/}

      <Header userAuth={auth.user} />
      {/********************** Content (list of comments) **********************/}

      <div className="flex w-full justify-center py-12 ">
        <div className=" grid w-1/2 gap-y-3 bg-transparent lg:w-5/6">
          <CommentList />
          <CommentForm />
        </div>
      </div>
      <footer className="pb-6  text-center font-bold text-GrayishBlue">
        Developed with 💜 by Zineb
      </footer>
    </div>
  );
}
