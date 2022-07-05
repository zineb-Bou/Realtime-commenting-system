// import Head from 'next/head';
// import Image from 'next/image';
import { useAuth } from '../lib/auth';
import LoginButtons from '../components/LoginButtons';
import { Vercel, Firebase, Nextjs, React, Tailwind } from '../icons/brands';

export default function Home() {
  const auth = useAuth();
  // max-w-2xl
  return (
    <div className="bg-VeryLightGray min-h-screen">
      <header className="grid place-items-center py-10 bg-White before:content-[''] before:absolute before:top-0 before:inline-block before:bg-LightNavyVliot before:h-3 before:w-full">
        <div className="w-3/5 border-2">
          <h1 className="font-Rubik font-bold	text-4xl leading-normal">
            Commenting system for your
            <span className="inline-block underline decoration-LightNavyVliot decoration-solid decoration-8 underline-offset-4 ml-2">
              Static Site
            </span>
          </h1>
          <p className="text-GrayishBlue font-medium my-2">
            This site is one of my personal project, the design inspired by
            frontend mentor. Building your own commenting system is it a bit
            challenging, so I am using here couple of modern tools that helped
            me to build this. Any contribution are welcomed.
          </p>
          {!auth.user ? <LoginButtons /> : ''}
          <div className="flex flex-row justify-between p-2 border-2 border-LightNavyVliot w-1/3">
            <Vercel />
            <Firebase />
            <Nextjs />
            <React />
            <Tailwind />
          </div>
        </div>
      </header>

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
