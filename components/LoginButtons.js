import { useAuth } from '../lib/auth';
import { Github, Google } from '../icons/brands';

const LoginButtons = () => {
  const auth = useAuth();
  return (
    <div className="flex justify-between a py-3 w-2/3 ">
      <button
        className="bg-Black text-White p-2 rounded-lg shadow-lg"
        onClick={(e) => {
          auth.signinWithGitHub();
        }}
      >
        <Github className="inline-block mr-2" />
        Continue with GitHub
      </button>
      <button
        className="bg-White text-Black p-2 rounded-lg shadow-lg"
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
