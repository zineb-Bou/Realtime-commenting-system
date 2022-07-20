import { useAuth } from '../lib/auth';

export default function SignoutModel() {
  const auth = useAuth();

  return (
    <div className="border border-LightGray rounded-lg flex flex-col absolute right-8 top-14 bg-white drop-shadow-lg">
      <p className="text-bold p-2  font-bold border-b ">{auth.user.name}</p>
      <button
        className=" text-Black font-medium my-4 mx-2 text-left pl-2 py-2 rounded-lg hover:bg-VeryLightGray"
        onClick={(e) => {
          auth.signout();
        }}
      >
        Sign out
      </button>
    </div>
  );
}
