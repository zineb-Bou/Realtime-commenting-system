import { useAuth } from '../lib/auth';
import Header from '../components/header';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/commentList';
import Github from '../icons/github';

export default function Home() {
  const auth = useAuth();
  return (
    <div className="min-h-screen bg-VeryLightGray">
      {/********************** Header  **********************/}
      <a
        href=" https://github.com/zineb-Bou/Realtime-commenting-system"
        className="h absolute top-4 left-2 flex justify-center gap-x-2 rounded-lg p-2 font-bold hover:bg-VeryLightGray hover:ring-2 hover:ring-violet-200 "
        target="_blank"
      >
        Github Repo
        <Github className="mr-2 inline-block fill-black" />
      </a>
      <Header userAuth={auth.user} />
      {/********************** Content (list of comments) **********************/}

      <div className="flex w-full justify-center py-12 ">
        <div className=" grid w-1/2 gap-y-3 bg-transparent lg:w-5/6">
          <CommentList />
          <CommentForm parentId={null} handleReply={() => {}} />
        </div>
      </div>
      <footer className="pb-6  text-center font-bold text-GrayishBlue">
        Developed with 💜 by Zineb
      </footer>
    </div>
  );
}
