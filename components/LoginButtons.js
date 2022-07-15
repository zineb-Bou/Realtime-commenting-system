import { useAuth } from '../lib/auth';
import { Github, Google } from '../icons/brands';

const LoginButtons = () => {
  const auth = useAuth();
  return (
    <div className="flex flex-col justify-between w-5/6 max-w-md  xl:flex-row">
      <button
        className="bg-Black text-White p-2 rounded-lg shadow-lg max-w-btn my-2"
        onClick={(e) => {
          auth.signinWithGitHub();
        }}
      >
        <Github className="inline-block mr-2" />
        Continue with GitHub
      </button>
      <button
        className="bg-White text-Black p-2 rounded-lg shadow-lg max-w-btn my-2"
        onClick={(e) => {
          auth.signinWithGoogle();
        }}
      >
        <Google className="inline-block mr-2" />
        Continue with Google
      </button>
    </div>
  );
};

export default LoginButtons;
