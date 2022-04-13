// import Head from 'next/head';
// import Image from 'next/image';
import { useAuth } from '../lib/auth';

export default function Home() {
  const auth = useAuth();
  if (!auth.user) {
    return (
      <>
        <button
          className="border-2 border-sky-500 rounded-full p-2 hover:bg-sky-500 hover:text-white"
          onClick={(e) => {
            auth.signinWithGitHub();
          }}
        >
          SignIn with github
        </button>
        <button
          className="border-2 border-sky-500 rounded-full p-2 hover:bg-sky-500 hover:text-white"
          onClick={(e) => {
            auth.signinWithGoogle();
          }}
        >
          SignIn with Google
        </button>
      </>
    );
  }
  return (
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
  );
}
