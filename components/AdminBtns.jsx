import Button from "./Button";

const AdminBtns = () => {
  return (
    <div className="hidden gap-4 md:flex">
      {/* Sign-in */}
      <Button label="Sign In" variant="primary" />

      {/* Add Job */}
      <Button label="Add Job" variant="secondary" />
    </div>
  );
};

export default AdminBtns;
