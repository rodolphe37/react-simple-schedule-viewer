import { ReactNode } from "react";
import "../../../../assets/css/Label.module.css";
import React from "react";

type Props = {
  children?: ReactNode;
};

const Label = ({ children }: Props) => {
  return (
    <label className={`Label text-black dark:text-white`}>
      {children}
    </label>
  );
};

export { Label };
