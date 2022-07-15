import { useAuth } from '../lib/auth';
import Header from '../components/header';

export default function Home() {
  const auth = useAuth();
  return (
    
    <div className="bg-VeryLightGray min-h-screen">

      {/********************** Header  **********************/}

      <Header userAuth={auth.user} />

      {/********************** Content  **********************/}


      {!auth.user ? (
        ''
      ) : (
        <>
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
          <button
            onClick={(e) => {
              auth.signout();
            }}
          >
            sign out
          </button>
        </>
      )}
    </div>
  );
}
