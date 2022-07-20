import LoginButtons from './LoginButtons';
import { Vercel, Firebase, Nextjs, React, Tailwind } from '../icons/brands';
import { useAuth } from '../lib/auth';
import Avatar from './Avatar';
import SignoutModel from './signOutModel';
import { useState, useEffect } from 'react';

export default function Header() {
  const auth = useAuth();
  const [showModel, setShow] = useState(false);

  const onMouseEnter = () => {
    setShow(true);
  };

  const onMouseLeave = () => {
    setShow(false);
  };

  useEffect(() => {
    setShow(false);
  }, [auth]);

  return (
    <header className="grid grid-rows-[60px_auto] gap-0 pb-2 bg-White before:content-[''] before:absolute before:top-0 before:inline-block before:bg-LightNavyVliot before:h-2 before:w-full ">
      <div className="w-2/5  lg:w-5/6 justify-self-center row-start-2 row-end-3 ">
        <h1 className="font-Rubik font-bold	text-3xl leading-normal">
          Commenting system for your
          <span className="inline-block underline decoration-LightNavyVliot decoration-solid decoration-8 underline-offset-4 ">
            Static Site
          </span>
        </h1>
        <p className="text-GrayishBlue font-medium my-2">
          This site is one of my personal project, the design inspired by
          frontend mentor. Building your own commenting system is it a bit
          challenging, so I am using here couple of modern tools that helped me
          to build this. Any contribution are welcomed. On the backside we have
          moderation, we delete comment if we have spamming.
        </p>
        {!auth.user ? <LoginButtons /> : ''}
        <div className="flex flex-row justify-between p-2  w-1/3 items-center mt-2">
          <Vercel />
          <Firebase />
          <Nextjs />
          <React />
          <Tailwind />
        </div>
      </div>
      {auth.user ? (
        <div
          className="flex items-center place-self-end mr-2 px-4 pb-2 cursor-pointer"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <Avatar src={auth.user.photoURL} />
          {showModel ? <SignoutModel /> : ''}
        </div>
      ) : (
        ''
      )}
    </header>
  );
}
