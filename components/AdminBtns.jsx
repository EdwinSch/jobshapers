import LinkButton from "./LinkButton";
import ActionButton from "./ActionButton";
import destroySession from "@/app/actions/destroySession";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const AdminBtns = () => {
  const router = useRouter();

  const handleLogout = async () => {
    const { success, error } = await destroySession();
    if (success) {
      router.push("/login");
      toast.success("succesvol uitgelogd");
    } else {
      toast.error(error);
    }
  };

  return (
    <div className="hidden gap-4 md:flex">
      {/* Sign-in */}
      <LinkButton label="sign in" href="/login" variant="primary" />

      {/* Sign-out */}
      <ActionButton label="sign out" variant="primary" onClick={handleLogout} />

      {/* Add Job */}
      <LinkButton label="post job" href="/createjob" variant="secondary" />
    </div>
  );
};

export default AdminBtns;
