"use client";

import ActionButton from "@/components/ActionButton";
import createSession from "../actions/createSession";
import { useActionState } from "react";
import { useEffect } from "react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/authContext";
import checkAuth from "../actions/checkAuth";

const LoginPage = () => {
  const [state, formAction] = useActionState(createSession, {});
  const { setIsAuthenticated, setCurrentUser } = useAuth();

  const router = useRouter();

  useEffect(() => {
    if (state.error) {
      toast.error(state.error);
    }
    if (state.success) {
      toast.success("Login succesvol");
      
      // Update auth context after successful login
      const updateAuthState = async () => {
        const { isAuthenticated, user } = await checkAuth();
        setIsAuthenticated(isAuthenticated);
        setCurrentUser(user);
      };
      
      updateAuthState();
      router.push("/");
    }
  }, [state, setIsAuthenticated, setCurrentUser]);

  return (
    <form
      action={formAction}
      className="m-10 mx-auto max-w-xl p-6 bg-white border border-slate-300 rounded-md shadow-md"
    >
      <h1 className="text-center mb-4 font-semibold">Login to JOBSHAPERS</h1>

      {/* email*/}
      <label htmlFor="email" className="text-jsMidnight text-sm">
        User *
      </label>
      <input
        type="email"
        name="email"
        id="email"
        placeholder="email"
        className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
        required
      />

      {/* password */}
      <label htmlFor="password" className="text-jsMidnight text-sm">
        Password *
      </label>
      <input
        type="password"
        name="password"
        id="password"
        placeholder="password"
        className="mt-1 mb-4 w-full py-2 px-3 bg-jsOffWhite border border-slate-300 rounded-md text-sm"
        required
      />

      <ActionButton type="submit" variant="blue" className="mt-4">
        Login
      </ActionButton>
    </form>
  );
};

export default LoginPage;
