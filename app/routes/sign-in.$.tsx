import { SignIn } from "@clerk/remix";

export default function SignInPage() {
  return (
    <div className="max-h-screen max-w-screen overflow-x-hidden">
      <div className="pt-20 flex justify-center">
        <SignIn />
      </div>
    </div>
  );
}
