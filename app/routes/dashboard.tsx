import {
    RedirectToSignIn,
  SignedIn, SignedOut,
} from "@clerk/remix";

export default function SignInPage() {
  return (
    <>
      <SignedIn>
        <div className="max-h-screen max-w-screen overflow-x-hidden">
          <div className="pt-20 flex justify-center">
            <h1>Dashboard</h1>
          </div>
        </div>
      </SignedIn>

      <SignedOut>
        <RedirectToSignIn redirectUrl="/sign-in"/>
      </SignedOut>
    </>
  );
}
