import * as React from "react";
import { Loader } from "./Loader";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  startIcon?: JSX.Element;
  endIcon?: JSX.Element;
  loading?: boolean;
  children: React.ReactNode;
}

export const Button = ({
  startIcon,
  endIcon,
  children,
  loading,
  className,
  ...buttonProps
}: Props) => {
  return (
    <button
      className={`button-schedule inline-flex justify-center items-center py-2 px-3 space-x-2  bg-blue-500  shadow active:bg-blue-400 rounded-xl text-white text-sm font-semibold disabled:bg-opacity-50 hover:(transform ) ${className}`}
      {...buttonProps}
    >
      {startIcon && <div className="mr-2">{startIcon}</div>}
      {children}
      {loading && <Loader className="text-white ml-3 w-4 h-4" />}

      {!loading && endIcon && <div>{endIcon}</div>}
    </button>
  );
};
