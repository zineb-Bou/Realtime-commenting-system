import { useAuth } from '../lib/auth';

export default function SignoutModel() {
  const auth = useAuth();

  return (
    <div className="absolute right-8 top-14 flex flex-col rounded-lg border border-LightGray bg-white drop-shadow-lg">
      <p className="text-bold border-b  p-2 font-bold ">{auth.user.name}</p>
      <button
        className=" my-4 mx-2 rounded-lg py-2 pl-2 text-left font-medium text-Black hover:bg-VeryLightGray"
        onClick={(e) => {
          auth.signout();
        }}
      >
        Sign out
      </button>
    </div>
  );
}
