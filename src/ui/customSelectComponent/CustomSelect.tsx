import React, { useRef, useState } from "react";
import "../../assets/css/customSelect.css";
import { SelectOption } from "../selectBox";
import useClickOutside from "../../components/schedules/week-planning/hooks/useClickOutside";
import { TSelectedValueProps } from "./types";

// Icon component
const Icon = ({
  isOpen,
  strokeColor,
}: {
  isOpen: boolean;
  strokeColor: string;
}) => {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      stroke="currentColor"
      strokeWidth="4.5"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`${isOpen ? "translate" : ""} ${strokeColor}`}
    >
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  );
};

// CustomSelect component
const CustomSelect = ({
  placeHolder,
  options,
  onChange,
  align,
  selectedValue,
  setSelectedValue,
  className,
  icon,
  strokeColor,
  isInDarkMode,
}: {
  options: SelectOption[];
  placeHolder: string | undefined;
  onChange: (newValue: string) => void;
  align?: string;
  selectedValue: TSelectedValueProps | null;
  setSelectedValue: React.Dispatch<
    React.SetStateAction<TSelectedValueProps | null>
  >;
  className?: string;
  icon?: JSX.Element;
  strokeColor?: string;
  isInDarkMode?: boolean;
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const inputRef = useRef<HTMLDivElement | null>(null);

  const handleInputClick = () => {
    setShowMenu(!showMenu);
  };

  const getDisplay = () => {
    if (!selectedValue) {
      return placeHolder;
    }
    return selectedValue.label;
  };

  const onItemClick = (option: TSelectedValueProps) => {
    const newValue: TSelectedValueProps = option;
    setSelectedValue(newValue);
    onChange(newValue.value);
    setShowMenu(false);
  };

  const isSelected = (option: TSelectedValueProps) => {
    if (!selectedValue) {
      return false;
    }

    return selectedValue.value === option.value;
  };

  const getOptions = () => {
    return options;
  };

  useClickOutside(inputRef, () => setShowMenu(false));

  return (
    <div ref={inputRef} className="custom--dropdown-container w-full">
      <div onClick={handleInputClick} className={`dropdown-input w-full `}>
        {icon && <div>{icon}</div>}{" "}
        <div
          className={`${className} dropdown-selected-value font-semibold truncate  ${
            !selectedValue ? "placeholder" : ""
          } `}
        >
          {getDisplay()}
        </div>
        <div className="dropdown-tools">
          <div className="dropdown-tool">
            <Icon strokeColor={strokeColor!} isOpen={showMenu} />
          </div>
        </div>
      </div>

      {showMenu && (
        <div
          style={
            isInDarkMode
              ? { backgroundColor: "#2d3648" }
              : { backgroundColor: "#edf0f7" }
          }
          className={`dropdown-menu alignment--${align || "auto"} w-full `}
        >
          {getOptions().map((option) => (
            <div
              onClick={() => {
                onItemClick(option);
                isSelected(option);
              }}
              key={option.value}
              className={`dropdown-item text-left ${
                isInDarkMode ? "text-white" : "text-black"
              } ${isSelected(option) && "selected"}`}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomSelect;
