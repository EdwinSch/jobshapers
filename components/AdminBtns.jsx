import LinkButton from "./LinkButton";
import { useState } from "react";

const AdminBtns = () => {
  return (
    <div className="hidden gap-4 md:flex">
      {/* Sign-in */}
      <LinkButton label="sign in" variant="primary" />

      {/* Add Job */}
      <LinkButton label="post job" href="/createjob" variant="secondary" />
    </div>
  );
};

export default AdminBtns;
