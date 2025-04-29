import { SignedIn, SignIn, SignInButton, SignOutButton } from "@clerk/nextjs";
import React from "react";

const page = () => {
  return (
    <div>
      Home Page
      <SignedIn>
        <SignOutButton />
      </SignedIn>
    </div>
  );
};

export default page;
