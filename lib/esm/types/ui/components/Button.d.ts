import * as React from "react";
interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    startIcon?: JSX.Element;
    endIcon?: JSX.Element;
    loading?: boolean;
    children: React.ReactNode;
}
export declare const Button: ({ startIcon, endIcon, children, loading, className, ...buttonProps }: Props) => import("react/jsx-runtime").JSX.Element;
export {};
//# sourceMappingURL=Button.d.ts.map