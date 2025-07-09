"use client";

import LinkButton from "./LinkButton";
import ActionButton from "./ActionButton";
import destroySession from "@/app/actions/destroySession";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAuth } from "@/context/authContext";

const AdminBtns = () => {
  const router = useRouter();

  const { isAuthenticated, setIsAuthenticated } = useAuth();

  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) {
      setIsAuthenticated(false);
      router.push("/login");
      toast.success("uitgelogd");
    } else {
      toast.error(error);
    }
  };

  return (
    <div className="hidden gap-4 md:flex">
      {/* Sign-in */}
      {!isAuthenticated && (
        <LinkButton label="sign in" href="/login" variant="primary" />
      )}

      {/* Sign-out */}
      {isAuthenticated && (
        <ActionButton
          label="sign out"
          variant="primary"
          onClick={handleLogout}
        />
      )}

      {/* Post Job */}
      {isAuthenticated && (
        <LinkButton label="post job" href="/createjob" variant="secondary" />
      )}
    </div>
  );
};

export default AdminBtns;
