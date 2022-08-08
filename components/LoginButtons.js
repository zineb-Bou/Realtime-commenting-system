import { useAuth } from '../lib/auth';
import Google from '../icons/google';
import Github from '../icons/github';

const LoginButtons = () => {
  const auth = useAuth();
  return (
    <div className="max-w-md flex w-5/6 flex-col justify-between  xl:flex-row">
      <button
        className="my-2 max-w-btn rounded-lg bg-Black p-2 text-White shadow-lg"
        onClick={(e) => {
          auth.signinWithGitHub();
        }}
      >
        <Github className="mr-2 inline-block fill-white" />
        Continue with GitHub
      </button>
      <button
        className="my-2 max-w-btn rounded-lg bg-White p-2 text-Black shadow-lg"
        onClick={(e) => {
          auth.signinWithGoogle();
        }}
      >
        <Google className="mr-2 inline-block" />
        Continue with Google
      </button>
    </div>
  );
};

export default LoginButtons;
