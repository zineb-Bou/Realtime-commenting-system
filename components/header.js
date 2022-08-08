import LoginButtons from './LoginButtons';
import { useAuth } from '../lib/auth';
import Avatar from './Avatar';
import SignoutModel from './signOutModel';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Github from '../icons/github';

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
    <header className="grid grid-rows-[60px_auto] gap-0 bg-White pb-2 before:absolute before:top-0 before:inline-block before:h-2 before:w-full before:bg-LightNavyVliot before:content-[''] ">
      <div className="row-start-2  row-end-3 w-2/5 justify-self-center lg:w-5/6 ">
        <h1 className="font-Rubik text-3xl	font-bold leading-normal">
          Commenting system
          {/* <span className="inline-block underline decoration-LightNavyVliot decoration-solid decoration-8 underline-offset-4 ">
            Static Site
          </span> */}
        </h1>
        <p className="my-2 font-medium text-GrayishBlue">
          This site is one of my personal projects. Building your own commenting
          system could be a bit challenging, so I am using here couple of modern
          tools that helped me to build this interactive commenting system, it
          is a new takeaway on how to build and deploy modern application with
          JAM stack. Its the easiest way to add comments or reviews to your
          static site. Try it out by leaving a comment below. Any contributions
          are welcomed.
          {/* <span>
            <a className=" inline flex gap-2 text-black">
              <Github className="fill-black" /> Github
            </a>
          </span> */}
        </p>

        {!auth.user ? <LoginButtons /> : ''}
        <div className="mt-2 flex w-1/2 flex-row items-center justify-between p-2">
          <Image
            src="/vercel.png"
            alt="Profile Picture"
            width={32}
            height={32}
          />
          <Image
            src="/nextjs.png"
            alt="Profile Picture"
            width={32}
            height={32}
          />

          <Image
            src="/react.png"
            alt="Profile Picture"
            width={32}
            height={32}
          />
          <Image
            src="/tailwind.png"
            alt="Profile Picture"
            width={32}
            height={32}
          />
          <Image
            src="/firebase.png"
            alt="Profile Picture"
            width={32}
            height={32}
          />
        </div>
      </div>
      {auth.user ? (
        <div
          className="mr-2 flex cursor-pointer items-center place-self-end px-4 pb-2"
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
