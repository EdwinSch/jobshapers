import LinkButton from "./LinkButton";

const AdminBtns = () => {
  return (
    <div className="hidden gap-4 md:flex">
      {/* Sign-in */}
      <LinkButton label="sign in" variant="primary" />

      {/* Add Job */}
      <LinkButton label="add job" variant="secondary" />
    </div>
  );
};

export default AdminBtns;
