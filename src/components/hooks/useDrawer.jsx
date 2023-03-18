import React, { useState } from "react";
const useDrawer = () => {
  const [open, setOpen] = useState(false);
  return <useState {...open} {...setOpen(true)} />;
};

export default useDrawer;
