import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="w-full flex flex-col justify-center items-center px-1 py-2">
      <SignUp afterSignInUrl='/user-profile'/>
    </div>
  );
}