import React from "react";
import "../../assets/css/customSelect.css";
import { SelectOption } from "../selectBox";
import { TSelectedValueProps } from "./types";
declare const CustomSelect: ({ placeHolder, options, onChange, align, selectedValue, setSelectedValue, className, icon, strokeColor, isInDarkMode, }: {
    options: SelectOption[];
    placeHolder: string | undefined;
    onChange: (newValue: string) => void;
    align?: string | undefined;
    selectedValue: TSelectedValueProps | null;
    setSelectedValue: React.Dispatch<React.SetStateAction<TSelectedValueProps | null>>;
    className?: string | undefined;
    icon?: JSX.Element | undefined;
    strokeColor?: string | undefined;
    isInDarkMode?: boolean | undefined;
}) => import("react/jsx-runtime").JSX.Element;
export default CustomSelect;
//# sourceMappingURL=CustomSelect.d.ts.map