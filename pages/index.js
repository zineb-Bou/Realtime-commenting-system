import { useAuth } from '../lib/auth';
import Header from '../components/header';
import CommentForm from '../components/CommentForm';
import { StrictMode } from 'react';
export default function Home() {
  const auth = useAuth();
  return (
    <div className="bg-VeryLightGray min-h-screen">
      {/********************** Header  **********************/}
        <Header userAuth={auth.user} />
      {/********************** Content  **********************/}

      <div className="py-12 w-full flex justify-center  ">
        <div className=" w-3/5  lg:w-5/6 ">
          {/* 
           
           <div> comment list </div> 
            <div> comment form </div> 
        */}
          <CommentForm />
        </div>
      </div>
    </div>
  );
}
