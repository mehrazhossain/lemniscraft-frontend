import SignupPage from "@/components/SignUp/SignUp";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Lemniscraft | Signup",
};

const SignUp = () => {
  return (
    <>
      <SignupPage />
    </>
  );
};

export default SignUp;
