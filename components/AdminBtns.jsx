"use client";

import LinkButton from "./LinkButton";
import { useState } from "react";

const AdminBtns = () => {
  const [hidden, setHidden] = useState(true);

  return (
    <div className="hidden gap-4 md:flex">
      {/* Sign-in */}
      <LinkButton label="sign in" variant="primary" />

      {/* Add Job */}
      {hidden || <LinkButton label="add job" variant="secondary" />}
    </div>
  );
};

export default AdminBtns;
