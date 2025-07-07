import ActionButton from "@/components/ActionButton";

const LoginPage = () => {
  return (
    <form className="m-10 mx-auto max-w-xl p-6 bg-white border border-slate-300 rounded-md">
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
